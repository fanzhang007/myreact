import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/index';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
