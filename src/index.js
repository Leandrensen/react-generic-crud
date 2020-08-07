import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ConnectedRouter } from 'connected-react-router';

import reducers from './reducers';
import Routes from './routes';
import store from './store';
import history from './history';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#app')
);
