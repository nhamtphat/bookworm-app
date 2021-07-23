import React, { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
import { connect } from 'react-redux'
import {
  DecreaseQuantity,
  IncreaseQuantity,
  EmptyCart,
  DeleteProduct,
} from '../_store/actions'
import { Link } from 'react-router-dom'
import EmptyCartAlert from './EmptyCartAlert'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import CartThankYou from './CartThankYou'
import { toast } from 'react-toastify'

function Cart(props) {
  const [thankYou, setThankYou] = useState(false)

  function TotalPrice(price, quantity) {
    return Number(price * quantity).toLocaleString('en-US')
  }

  function TotalCart() {
    let TotalCart = 0
    props.cart.forEach((item) => {
      TotalCart += item.quantity * item.product.final_price
    })

    TotalCart = Math.round(TotalCart * 100) / 100
    return TotalCart
  }

  function placeOrder() {
    if (props.cart.length === 0) return
    let params = {
      cart: props.cart,
    }
    axios
      .post('/api/orders', params)
      .then((response) => {
        props.EmptyCart()
        setThankYou(true)
      })
      .catch((error) => {
        let data = error.response.data
        data.unavailable_products.forEach((item) => {
          props.DeleteProduct(item)
        })
        toast.error(
          'Some products are no longer available. It will be removed from the cart',
          { autoClose: 10000 },
        )
      })
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Your cart - Bookworm`} </title>
      </Helmet>
      {thankYou ? <CartThankYou /> : null}
      <section
        className={thankYou ? 'd-none' : 'section-content bg padding-y pt-0'}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="border-bottom p-3">
                Your cart: {props.cart.length} items
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Book</th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.cart.length == 0 ? <EmptyCartAlert /> : ''}

                    {props.cart.map((item, key) => (
                      <tr className="border-top" key={key}>
                        <td>
                          <Link
                            to={'/books/' + item.product.id}
                            target="_blank"
                          >
                            <figure className="itemside align-items-center">
                              <div className="aside">
                                <img
                                  src={item.product.book_cover_photo}
                                  className="img-sm"
                                />
                              </div>
                              <figcaption className="info">
                                <span className="title text-dark">
                                  {item.product.book_title}
                                </span>
                                <p className="text-muted small">
                                  Author: {item.product.author_name}
                                </p>
                              </figcaption>
                            </figure>
                          </Link>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">
                              ${item.product.final_price}
                            </var>
                            <del className="sub-text">
                              ${item.product.book_price}
                            </del>
                          </div>
                        </td>
                        <td>
                          <div className="input-group input-spinner">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-fa-minus"
                                onClick={() =>
                                  props.DecreaseQuantity(item.product)
                                }
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              value={item.quantity}
                              readOnly={true}
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-fa-plus"
                                onClick={() =>
                                  props.IncreaseQuantity(item.product)
                                }
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">
                              $
                              {TotalPrice(
                                item.product.final_price,
                                item.quantity,
                              )}
                            </var>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="card-body border-top">
                  <p className="icontext">
                    <i className="icon text-success fa fa-truck"></i> Free
                    Delivery within 1-2 weeks
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3 mt-md-0">
              <div className="card">
                <div className="card-header">
                  <div className="">
                    <h5 className="text-center">Cart Total</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="font-weight-bold text-center text-lg">
                        ${TotalCart()}
                      </div>
                      <button
                        className="btn btn-block btn-primary mt-3"
                        onClick={() => placeOrder()}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state._cartReducers.Carts,
  }
}

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteProduct,
  EmptyCart,
})(Cart)
