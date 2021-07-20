import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom"

import Home from './home/Home'
import Book  from './book/Book';
import Shop from "./shop/Shop";
import Cart from "./cart/Cart";
import About from "./about/About";

export default class router extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/books/:id" component={Book} />
                <Route path="/cart" component={Cart} />
                <Route path="/about" component={About} />
            </Router>
        )
    }
}
