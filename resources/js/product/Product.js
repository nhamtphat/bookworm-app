import React, { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
import ReviewSection from './ReviewSection'
import stars_active from '../../assets/images/icons/stars-active.svg'
import stars_disable from '../../assets/images/icons/stars-disable.svg'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { AddCart } from '../_store/actions'
import { connect } from 'react-redux'
import LoadingSpin from '../common/LoadingSpin'

function Product(props) {
  const [book, setBook] = useState({})
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    fetchBook()
  }, [])

  function fetchBook() {
    axios.get(`/api/books/${props.match.params.id}`).then((response) => {
      setBook(response.data.data)
    })
  }

  function updateQuantity(new_value) {
    if (new_value > 8) return
    if (new_value < 1) return
    setQuantity(new_value)
  }

  function addToCart() {
    props.AddCart({ product: book, quantity })
    setQuantity(1)
  }

  function dataIsReady() {
    return (book.book_title != null)
  }

  return (
    <Layout>
      <Helmet>
        <title>{book.book_title + ' - Bookworm'} </title>
      </Helmet>
      <section className="section-content bg padding-y pt-0">
        {!dataIsReady() ? <LoadingSpin /> : null}

        <div className={'container ' + (!dataIsReady() ? 'd-none' : '')}>
          <div className="row mb-5">
            <div className="col-12">
              <h4 className="border-bottom p-3 text-capitalize">
                {book.category_name}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <article className="card">
                <div className="card-body">
                  <div className="row">
                    <aside className="col-md-4">
                      <article className="gallery-wrap">
                        <div className="card img-wrap">
                          <a href="#">
                            <img src={book.book_cover_photo} />
                          </a>
                        </div>
                      </article>
                    </aside>
                    <main className="col-md-8">
                      <article>
                        <span className="text-primary">
                          By (author) {book.author_name}
                        </span>
                        <h3 className="title">{book.book_title}</h3>
                        <div>
                          <ul className="rating-stars">
                            <li
                              style={{
                                width: book.avg_star * 20 + '%',
                              }}
                              className="stars-active"
                            >
                              <img src={stars_active} alt="" />
                            </li>
                            <li>
                              <img src={stars_disable} alt="" />
                            </li>
                          </ul>
                          <span className="label-rating mr-3 text-muted">
                            {book.avg_star} star
                          </span>
                        </div>

                        <hr />

                        <div className="mb-3">
                          <h6>Summary</h6>
                          {book.book_summary}
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
                    {book.book_price !== book.final_price ? (
                      <del className="text-gray-light">${book.book_price}</del>
                    ) : null}
                    <var className="price h4 ml-2">${book.final_price}</var>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group flex-grow-0">
                        <div className="form-label">Quantity</div>
                        <div className="input-group mb-3 input-spinner">
                          <div className="input-group-append">
                            <button
                              className="btn btn-light"
                              type="button"
                              id="button-minus"
                              onClick={() => updateQuantity(quantity - 1)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            value={quantity}
                            readOnly={true}
                          />
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-light"
                              type="button"
                              id="button-plus"
                              onClick={() => updateQuantity(quantity + 1)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-block btn-primary"
                        onClick={() => addToCart()}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ReviewSection book={book} fetchBook={fetchBook} />

        </div>
      </section>
    </Layout>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  }
}

export default connect(null, mapDispatchToProps)(Product)
