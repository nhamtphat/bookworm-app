import React, {Component} from 'react';
import product_image from "../../assets/images/items/7.jpg";

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
                    <a href="#" className="title">{this.props.book.name}</a>
                    <div className="price-wrap mt-2">
                        <span className="price">${this.props.book.price}</span>
                        <del className="price-old">${this.props.book.price}</del>
                    </div>
                </figcaption>
            </figure>
        );
    }
}

export default BookGridFigure;