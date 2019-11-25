import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MainPage from "./views/pages/main/Main";
import ProductPage from "./views/pages/product/Product";
import ProfilePage from "./views/pages/profile/Profile";
import CartPage from "./views/pages/cart/Cart";



ReactDOM.render(
    <BrowserRouter>
        <App> 
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/product/:id" component={ProductPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/cart" component={CartPage} />
            </Switch>
        </App>
    </BrowserRouter>
, document.getElementById('root'));



serviceWorker.unregister();
