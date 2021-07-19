import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BookListFigure extends Component {
    render() {
        return (
            <article className="card card-product-list">
                <div className="row no-gutters">
                    <aside className="col-md-3">
                        <a href="#" className="img-wrap">
                            <span className="badge badge-danger"> NEW </span>
                            <img src={this.props.book.book_cover_photo} />
                        </a>
                    </aside>
                    <div className="col-md-6">
                        <div className="info-main">
                            <Link to={'products/' + this.props.book.id} className="h5 title"> {this.props.book.book_title} </Link>
                            <div className="text-danger">{this.props.book.author_name}</div>
                            <p> {this.props.book.book_summary} </p>
                        </div>
                    </div>
                    <aside className="col-sm-3">
                        <div className="info-aside">
                            <div className="price-wrap">
                                <span className="price h5"> {this.props.book.final_price} </span>
                                {(this.props.book.final_price != this.props.book.book_price)
                                    ?
                                    <del className="price-old">${this.props.book.book_price}</del>
                                    :
                                    <></>
                                }
                            </div>
                            <p className="text-success">Free shipping</p>
                            <br />
                            <p>
                                <Link to={"products/" + this.props.book.id} className="btn btn-primary btn-block">
                                    <i className="fa fa-eye"></i>
                                    <span className="text">View product</span>
                                </Link>
                                <a href="#" className="btn btn-light btn-block">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="text">Add to cart</span>
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