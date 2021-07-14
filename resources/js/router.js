import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Home from './home/Home'
import Product from './product/Product';
import Shop from "./shop/Shop";
import Cart from "./cart/Cart";
import About from "./about/About";

export default class router extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/product" component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/about" component={About} />
            </Router>
        )
    }
}
