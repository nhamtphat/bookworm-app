import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../layouts";
import ReviewSection from "./ReviewSection";
import product_image from '../../assets/images/items/12.jpg'
import stars_active from '../../assets/images/icons/stars-active.svg'
import stars_disable from '../../assets/images/icons/stars-disable.svg'
import axios from "axios";
import {Helmet} from "react-helmet";

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        book: {}
    }

    componentWillMount() {
        axios.get(`/api/books/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    book: response.data.data
                })
            })
    }

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>{`${this.state.book.book_title} - Bookworm`} </title>
                </Helmet>
                <section className="section-content bg padding-y">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <article className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <aside className="col-md-4">
                                                <article className="gallery-wrap">
                                                    <div className="card img-wrap">
                                                        <a href="#"> <img src={product_image} /></a>
                                                    </div>
                                                </article>
                                            </aside>
                                            <main className="col-md-8">
                                                <article>
                                                    <span className="text-primary">{this.state.book.author_name}</span>
                                                    <h3 className="title">{this.state.book.book_title}</h3>
                                                    <div>
                                                        <ul className="rating-stars">
                                                            <li style={{width: "60%"}} className="stars-active">
                                                                <img src={stars_active} alt="" />
                                                            </li>
                                                            <li>
                                                                <img src={stars_disable} alt="" />
                                                            </li>
                                                        </ul>
                                                        <span className="label-rating mr-3 text-muted">7/10</span>
                                                    </div>

                                                    <hr />

                                                    <div className="mb-3">
                                                        <h6>Summary</h6>
                                                        {this.state.book.book_summary}
                                                    </div>
                                                </article>
                                            </main>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="">
                                            <del className="text-gray-light">${ this.state.book.book_price }</del>
                                            <var className="price h4 ml-2">${ this.state.book.final_price }</var> <br />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group flex-grow-0">
                                                    <div className="form-label">Quantity</div>
                                                    <div className="input-group mb-3 input-spinner">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-light" type="button" id="button-plus" onClick={() => updateQuantity(1)}> + </button>
                                                        </div>
                                                        <input type="text" className="form-control" value="1" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-light" type="button" id="button-minus" onClick={() => updateQuantity(-1)}> − </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-block btn-primary">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ReviewSection />
            </Layout>
        );
    }
};

export default Product;
