import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import {
//     Route,
//     BrowserRouter as Router,
//     Switch
// } from "react-router-dom";
import App from './app/App';
import * as serviceWorker from './serviceWorker';
// redux-logger is a middleware that lets you log every state change
import logger from 'redux-logger';

// redux-thunk is a middleware that lets you dispatch async actions
import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware
} from 'redux';
import rootReducer from './app/components/frame/duck/reducer';
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();






//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
