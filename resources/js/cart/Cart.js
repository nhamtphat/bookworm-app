import React, { Component } from 'react'
import Layout from '../layouts'
import stars_active from "../../assets/images/icons/stars-active.svg"
import stars_disable from "../../assets/images/icons/stars-disable.svg"
import product_image from "../../assets/images/items/7.jpg"
import avatar from "../../assets/images/avatars/avatar1.jpg"

export default class Cart extends Component {
    state = {
        value: 1
    }

    handleChange() {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <Layout>
                <section className="section-content bg padding-y">
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
                                        <tr className="border-top">
                                            <td>
                                                <figure className="itemside align-items-center">
                                                    <div className="aside">
                                                        <img src={product_image} className="img-sm" />
                                                    </div>
                                                    <figcaption className="info">
                                                        <a href="#" className="title text-dark">Camera Canon EOS M50 Kit</a>
                                                        <p className="text-muted small">Matrix: 25 Mpx <br /> Brand: Canon </p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <var className="price">$1156.00</var>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="input-group input-spinner">
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-light" type="button"
                                                                id="button-plus"><i className="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" className="form-control" value={this.state.value} />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-light" type="button"
                                                                id="button-minus"><i className="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <var className="price">$1156.00</var>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-top">
                                            <td>
                                                <figure className="itemside align-items-center">
                                                    <div className="aside">
                                                        <img src={product_image} className="img-sm" />
                                                    </div>
                                                    <figcaption className="info">
                                                        <a href="#" className="title text-dark">Camera Canon EOS M50 Kit</a>
                                                        <p className="text-muted small">Matrix: 25 Mpx <br /> Brand: Canon </p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <var className="price">$1156.00</var>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="input-group input-spinner">
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-light" type="button"
                                                                id="button-plus"><i className="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" className="form-control" value="1" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-light" type="button"
                                                                id="button-minus"><i className="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <var className="price">$1156.00</var>
                                                </div>
                                            </td>
                                        </tr>
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
                                                <div className="font-weight-bold text-center text-lg">$99.97</div>
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
}
