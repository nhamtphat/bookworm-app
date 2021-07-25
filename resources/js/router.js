import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home/Home'
import Product from './product/Product'
import Shop from './shop/Shop'
import Cart from './cart/Cart'
import About from './about/About'
import ErrorNotFound from "./common/ErrorNotFound";

export default function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/books/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route component={ErrorNotFound} />
      </Switch>
    </Router>
  )
}
