import React, {useEffect, useState} from 'react'
import Layout from '../layouts'
import product_image from "../../assets/images/items/7.jpg"
import {connect} from "react-redux";
import {DecreaseQuantity, DeleteCart, IncreaseQuantity} from "../_store/actions";

function Cart(props) {
    function TotalPrice(price, quantity) {
        return Number(price * quantity).toLocaleString('en-US');
    }

    function TotalCart() {
        let TotalCart = 0;
        props.cart.forEach(item => {
            TotalCart += item.quantity * item.product.final_price;
        })

        TotalCart = Math.round(TotalCart * 100) / 100
        return TotalCart;
    }

    return (
        <Layout>
            <section className="section-content bg padding-y pt-0">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="border-bottom p-3">Your cart: {props.cart.length} items</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                    <tr className="small text-uppercase">
                                        <th scope="col">Product</th>
                                        <th scope="col" width="120">Price</th>
                                        <th scope="col" width="120">Quantity</th>
                                        <th scope="col" width="120">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.cart.map(item => (
                                        <tr className="border-top" key={item.product.id}>
                                            <td>
                                                <figure className="itemside align-items-center">
                                                    <div className="aside">
                                                        <img src={product_image} className="img-sm"/>
                                                    </div>
                                                    <figcaption className="info">
                                                        <a href="#"
                                                           className="title text-dark">{item.product.book_title}</a>
                                                        <p className="text-muted small">Matrix: 25 Mpx <br/> Brand: Canon
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <var className="price">${item.product.final_price}</var>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="input-group input-spinner">
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-light"
                                                                type="button"
                                                                id="button-fa-minus"
                                                                onClick={() => props.DecreaseQuantity(item.product)} >
                                                            <i className="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" className="form-control" value={item.quantity} readOnly={true} />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-light"
                                                                type="button"
                                                                id="button-fa-plus"
                                                                onClick={() => props.IncreaseQuantity(item.product)} >
                                                            <i className="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <var className="price">${TotalPrice(item.product.final_price, item.quantity)}</var>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>

                                <div className="card-body border-top">
                                    <p className="icontext">
                                        <i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <div className="card">
                                <div className="card-header">
                                    <div className="">
                                        <h5 className="text-center">Cart Total</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="font-weight-bold text-center text-lg">${TotalCart()}</div>
                                            <button className="btn btn-block btn-primary mt-3">Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        cart: state._cartReducers.Carts
    }
}

export default connect(mapStateToProps, {IncreaseQuantity, DecreaseQuantity, DeleteCart})(Cart)
