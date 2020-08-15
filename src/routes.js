import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Common Routes
import Header from './components/Header';
import Login from './containers/Login';
import Page404 from './containers/Page404';
import StreamList from './components/Streams/StreamList';
import StreamCreate from './components/Streams/StreamCreate';
import StreamEdit from './components/Streams/StreamEdit';
import StreamDelete from './components/Streams/StreamDelete';
import StreamShow from './components/Streams/StreamShow';

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
