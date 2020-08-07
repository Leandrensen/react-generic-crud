import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// App Components
import App from './components/App';
// import AppRoles from './components/AppRoles';

// Common Routes
import Login from './containers/Login';
import Page404 from './containers/Page404';

const Routes = () => (
    <App>
        <Switch>
            <Route path='/login' component={Login} exact />
            <Route component={Page404} />
        </Switch>
    </App>
);

export default Routes;
