export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const ADD_CART = 'ADD_CART'
export const EMPTY_CART = 'EMPTY_CART'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export function AddCart(payload) {
  return {
    type: 'ADD_CART',
    payload,
  }
}
export function DeleteProduct(payload) {
  return {
    type: 'DELETE_PRODUCT',
    payload,
  }
}
export function IncreaseQuantity(payload) {
  return {
    type: 'INCREASE_QUANTITY',
    payload,
  }
}
export function DecreaseQuantity(payload) {
  return {
    type: 'DECREASE_QUANTITY',
    payload,
  }
}
export function EmptyCart(payload) {
  return {
    type: 'EMPTY_CART',
    payload,
  }
}
