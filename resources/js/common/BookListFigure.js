import React from 'react'
import { Link } from 'react-router-dom'

export default function BookListFigure({ book }) {
  return (
    <article className="card card-product-list">
      <div className="row no-gutters">
        <aside className="col-md-3">
          <a href="#" className="img-wrap">
            <span className="badge badge-danger"> NEW </span>
            <img src={book.book_cover_photo} />
          </a>
        </aside>
        <div className="col-md-6">
          <div className="info-main">
            <Link to={'/books/' + book.id} className="h5 title">
              {book.book_title}
            </Link>
            <div className="text-danger">{book.author_name}</div>
            <p> {book.book_summary} </p>
          </div>
        </div>
        <aside className="col-sm-3">
          <div className="info-aside">
            <div className="price-wrap">
              <span className="price h5"> {book.final_price} </span>
              {book.final_price != book.book_price ? (
                <del className="price-old">${book.book_price}</del>
              ) : null}
            </div>
            <p className="text-success">Free shipping</p>
            <br />
            <p>
              <Link
                to={'/books/' + book.id}
                className="btn btn-primary btn-block"
              >
                <i className="fa fa-eye"></i>
                <span className="text">View product</span>
              </Link>
            </p>
          </div>
        </aside>
      </div>
    </article>
  )
}
