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
import ordersPage from "./views/pages/orders/Orders";
import cartPage from "./views/pages/cart/Cart";
import favoritesPage from "./views/pages/favorites/Favorites";
import { Provider } from 'react-redux';
import store from "./core/redux/store";





ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App> 
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/product/:id" component={ProductPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/orders" component={ordersPage} />
                <Route exact path="/cart" component={cartPage} />
                <Route exact path="/favorites" component={favoritesPage} />
                <Route exact path="/:page" component={MainPage} />
                <Route exact path="/:page/:search" component={MainPage} />
            </Switch>
        </App>
    </Provider>
</BrowserRouter>
, document.getElementById('root'));



serviceWorker.unregister();
