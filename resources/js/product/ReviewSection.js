import React, {Component} from 'react';
import avatar from '../../assets/images/avatars/avatar1.jpg'
import stars_active from '../../assets/images/icons/stars-active.svg'
import stars_disable from '../../assets/images/icons/stars-disable.svg'

class ReviewSection extends Component {
    render() {
        return (
            <section className="section-review bg padding-y">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <header className="">
                                        <div className="form-inline">
                                            <h5>Customer Reviews</h5>
                                            <span className="ml-3 mr-md-auto">32 Items found </span>
                                            <select className="mr-2 form-control">
                                                <option>Latest items</option>
                                                <option>Trending</option>
                                                <option>Most Popular</option>
                                                <option>Cheapest</option>
                                            </select>
                                        </div>
                                    </header>
                                </div>
                                <div className="card-body">
                                    <article className="box mb-3 border-0">
                                        <div className="icontext w-100">
                                            <img src={avatar} className="img-xs icon rounded-circle" />
                                            <div className="text">
                                                <span className="date text-muted float-md-right">24.04.2020 </span>
                                                <h6 className="mb-1">Mike John </h6>
                                                <ul className="rating-stars">
                                                    <li style={{width: "80%"}} className="stars-active">
                                                        <img src={stars_active} alt="" />
                                                    </li>
                                                    <li>
                                                        <img src={stars_disable} alt="" />
                                                    </li>
                                                </ul>
                                                <span className="label-rating text-warning">Good</span>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p>
                                                Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Write a review</h4>
                                    <form>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>What is message about?</label>
                                            <textarea className="form-control" rows="3"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>What is message about?</label>
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Technical issue</option>
                                                <option>Money refund</option>
                                                <option>Recommendation</option>
                                            </select>
                                        </div>
                                        <button className="btn btn-primary btn-block">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ReviewSection;