import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {HashRouter} from 'react-router-dom'
import thunk from 'redux-thunk'
import RestaurantsR from "./Store/reducer/RestaurantsR"
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
const rooReducer = combineReducers({
    restaurants: RestaurantsR

});
const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rooReducer, composeEnhancers(applyMiddleware(thunk)));



const app = (<Provider store={store}>
    <HashRouter basename='/'>
        <App />
    </HashRouter>
</Provider>)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
