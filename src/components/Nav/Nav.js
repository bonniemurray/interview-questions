import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    withRouter
} from "react-router-dom";

import routes from '../../config/router';

require('./Nav.css');

class Nav extends React.Component {
    render() {
        return (
            <div>
                This is the Nav.
                {routes.map((route, idx) => (
                    <NavLink to={route.path} activeClassName="selected">{route.label}</NavLink>
                ))}
            </div>
        );
    }
}

export default Nav;