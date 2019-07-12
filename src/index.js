import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import Products from './modules/products/Product';
import Todo from './modules/todos/Todo';
import CartList from './modules/products/cart/CartList';
import Checkout from './modules/products/checkout/Checkout';
import Login from './modules/account/Login';

import { CartProvider } from './modules/products/cart/Cart';

import * as serviceWorker from './serviceWorker';



const routing = (
  <CartProvider>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/products" component={Products} />
        <Route path="/todos" component={Todo} />
        <Route path="/cart" component={CartList} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </CartProvider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
