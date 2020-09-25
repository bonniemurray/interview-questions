
import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";
import Nav from './components/Nav/Nav';

import routes from './config/router';

class App extends Component {
  render() {
      console.log(this)
    return (
        <Fragment>
            <Nav />
            <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                />
            ))}
            </Switch>
        </Fragment>
    );
  }
}

export default App;