import LodashPage from '../components/pagetypes/lodashPage';
import HomePage from '../components/pagetypes/home';

export default [
    {
        label: 'Home',
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: HomePage
    },
    {
        label: 'Lodash',
        path: "/lodashPage",
        sidebar: () => <div>lodash page!</div>,
        main: LodashPage
    }
];