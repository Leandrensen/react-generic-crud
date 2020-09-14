import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Common Routes
import Header from './containers/Header';
import Login from './containers/Login';
import Page404 from './containers/Page404';
import StreamList from './containers/Streams/StreamList';
import StreamCreate from './containers/Streams/StreamCreate';
import StreamEdit from './containers/Streams/StreamEdit';
import StreamDelete from './containers/Streams/StreamDelete';
import StreamShow from './containers/Streams/StreamShow';

const Routes = () => (
    <>
        <Header />
        <Switch>
            <Route path='/login' component={Login} exact />
            <Route path='/' component={StreamList} exact />
            <Route path='/streams/new' component={StreamCreate} exact />
            <Route path='/streams/edit' component={StreamEdit} exact />
            <Route path='/streams/delete' component={StreamDelete} exact />
            <Route path='/streams/show' component={StreamShow} exact />
            <Route component={Page404} />
        </Switch>
    </>
);

export default Routes;
