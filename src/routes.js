import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Common Routes
import Header from './components/Globales/Header';
import Login from './containers/Login';
import Page404 from './containers/Page404';

const Routes = () => (
    <>
        <Header />
        <Switch>
            <Route path='/login' component={Login} exact />
            <Route component={Page404} />
        </Switch>
    </>
);

export default Routes;
