import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// App Components

// import AppRoles from './components/AppRoles';

// Common Routes
import Login from './containers/Login';
import Page404 from './containers/Page404';

///////
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const PageOne = () => {
    return (
        <div>
            <span>Page One</span>
            <Link to='/pagetwo'>
                <Button>To Page Two</Button>
            </Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            <span>Page One</span>
            <Link to='/'>
                <Button>To Page One</Button>
            </Link>
        </div>
    );
};
///////

const Routes = () => (
    <Switch>
        <Route path='/login' component={Login} exact />
        <Route path='/' component={PageOne} exact />
        <Route path='/pagetwo' component={PageTwo} exact />
        <Route component={Page404} />
    </Switch>
);

export default Routes;
