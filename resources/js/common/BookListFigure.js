import React, {Component} from 'react';
import product_image from "../../assets/images/items/7.jpg";

class BookListFigure extends Component {
    render() {
        return (

            <article className="card card-product-list">
                <div className="row no-gutters">
                    <aside className="col-md-3">
                        <a href="#" className="img-wrap">
                            <span className="badge badge-danger"> NEW </span>
                            <img src={product_image} />
                        </a>
                    </aside>
                    <div className="col-md-6">
                        <div className="info-main">
                            <a href="#" className="h5 title"> {this.props.name} </a>
                            <div className="rating-wrap mb-3">
                                <ul className="rating-stars">
                                    <li style={{width: "80%"}} className="stars-active">
                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                                <div className="label-rating">7/10</div>
                            </div>

                            <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                        </div>
                    </div>
                    <aside className="col-sm-3">
                        <div className="info-aside">
                            <div className="price-wrap">
                                <span className="price h5"> {this.props.price} </span>
                                <del className="price-old"> {this.props.price}</del>
                            </div>
                            <p className="text-success">Free shipping</p>
                            <br />
                            <p>
                                <a href="#" className="btn btn-primary btn-block"> Details </a>
                                <a href="#" className="btn btn-light btn-block"><i className="fa fa-heart"></i>
                                    <span className="text">Add to wishlist</span>
                                </a>
                            </p>
                        </div>
                    </aside>
                </div>
            </article>
        );
    }
}

export default BookListFigure;