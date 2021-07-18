import React, {Component} from 'react';
import product_image from "../../assets/images/items/7.jpg";
import {Link} from "react-router-dom";

class BookGridFigure extends Component {
    render() {
        return (
            <figure className="card card-product-grid">
                <div className="img-wrap">
                    <span className="topbar">
                        <span className="badge badge-success"> NEW </span>
                    </span>
                    <img src={product_image}/>
                </div>
                <figcaption className="info-wrap border-top">
                    <Link to={"/products/" + this.props.book.id} className="title font-weight-bold">{this.props.book.book_title}</Link>
                    <div className="text-danger">{this.props.book.author_name}</div>
                    <div className="price-wrap mt-2">
                        <span className="price">${this.props.book.final_price}</span>
                        {(this.props.book.final_price != this.props.book.book_price)
                            ?
                            <del className="price-old">${this.props.book.book_price}</del>
                            :
                            <></>
                        }

                    </div>
                </figcaption>
            </figure>
        );
    }
}

export default BookGridFigure;