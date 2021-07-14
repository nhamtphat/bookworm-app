import React from 'react';
import Layout from "../layouts";
import ReviewSection from "./ReviewSection";
import product_image from '../../assets/images/items/12.jpg'
import stars_active from '../../assets/images/icons/stars-active.svg'
import stars_disable from '../../assets/images/icons/stars-disable.svg'

const Product = () => {
    return (
        <Layout>
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
                                                <a href="#" className="text-primary btn-link">Clothes</a>
                                                <h3 className="title">Winter Boots Leather for Men</h3>
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
                                                    <a href="#" className="btn-link  mr-3 text-muted"> <i className="fa fa-heart"></i> Save for later </a>
                                                    <a href="#" className="btn-link text-muted"> <i className="fa fa-book-open"></i> Compare </a>
                                                </div>

                                                <hr />

                                                <div className="mb-3">
                                                    <h6>Short description</h6>
                                                    <ul className="list-dots mb-0">
                                                        <li>Made in Russia</li>
                                                        <li>Wolf leather</li>
                                                        <li>Rubber material bottom</li>
                                                        <li>Dark blue color</li>
                                                    </ul>
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
                                        <del className="text-gray-light">$230.00</del>
                                        <var className="price h4 ml-2">$230.00</var> <br />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group flex-grow-0">
                                                <div className="form-label">Quantity</div>
                                                <div className="input-group mb-3 input-spinner">
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-light" type="button" id="button-plus"> + </button>
                                                    </div>
                                                    <input type="text" className="form-control" value="1" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-light" type="button" id="button-minus"> − </button>
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
};

export default Product;
