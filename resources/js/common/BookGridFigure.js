import React from 'react'
import { Link } from 'react-router-dom'

export default function BookGridFigure({ book }) {
  return (
    <figure className="card card-product-grid">
      <Link to={'/books/' + book.id}>
        <div className="img-wrap">
          <span className="topbar">
            <span className="badge badge-success"> NEW </span>
          </span>
          <img src={book.book_cover_photo} />
        </div>
      </Link>
      <figcaption className="info-wrap border-top">
        <Link to={'/books/' + book.id} className="title font-weight-bold">
          {book.book_title}
        </Link>
        <div className="text-danger author">{book.author_name}</div>
        <div className="price-wrap mt-2">
          <span className="price">${book.final_price}</span>
          {book.final_price != book.book_price ? (
            <del className="price-old">${book.book_price}</del>
          ) : null}
        </div>
      </figcaption>
    </figure>
  )
}
