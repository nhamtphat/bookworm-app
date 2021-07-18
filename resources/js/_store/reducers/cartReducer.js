import {
    ADD_CART,
    DECREASE_QUANTITY,
    DELETE_CART,
    GET_ALL_PRODUCT,
    GET_NUMBER_CART,
    INCREASE_QUANTITY
} from '../actions';

const initProduct = {
    numberCart: 0,
    Carts: [],
    _products: []
}

export default function cartReducer(state = initProduct, action) {
    let p_quantity, p_product;
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                _products: action.payload
            }
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case ADD_CART:
            p_product = action.payload.product;
            p_quantity = action.payload.quantity;

            if (state.numberCart === 0) {
                let cart = {
                    product: p_product,
                    quantity: p_quantity,
                }
                state.Carts.push(cart);
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.product.id === p_product.id) {
                        state.Carts[key].quantity += p_quantity;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        product: p_product,
                        quantity: p_quantity
                    }
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + action.payload.quantity
            }
        case INCREASE_QUANTITY:
            p_product = action.payload
            return {
                ...state,
                numberCart: state.numberCart + 1,
                Carts:  state.Carts.map((item) => {
                    if (item.product.id === p_product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item;
                    }
                })
            }
        case DECREASE_QUANTITY:
            p_product = action.payload
            let quantity = state.Carts.find((item) => { return p_product.id == item.product.id }).quantity;
            if(quantity == 1) return state;

            return {
                ...state,
                numberCart: state.numberCart - 1,
                Carts:  state.Carts.map((item) => {
                    if (item.product.id === p_product.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    } else {
                        return item;
                    }
                })
            }
        case DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter(item => {
                    return item.id != state.Carts[action.payload].id
                })

            }
        default:
            return state;
    }
}