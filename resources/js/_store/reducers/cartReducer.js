import {
    ADD_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY
} from '../actions';

const initProduct = {
    numberCart: 0,
    Carts: [],
    _products: []
}

const MAX_QUANTITY = 8;

export default function cartReducer(state = initProduct, action) {
    let p_quantity, p_product;
    switch (action.type) {
        case ADD_CART:
            p_product = action.payload.product;
            p_quantity = action.payload.quantity;
            let plus_number_cart = 0;

            if (state.numberCart === 0) {
                let cart = {
                    product: p_product,
                    quantity: p_quantity,
                }
                state.Carts.push(cart);
                plus_number_cart = 1
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.product.id === p_product.id) {
                        if((state.Carts[key].quantity + p_quantity) > MAX_QUANTITY) {
                            p_quantity = MAX_QUANTITY - state.Carts[key].quantity
                        }
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
                    plus_number_cart = 1
                }
            }

            if (p_quantity > 0) {
                toast.success("Added " + p_quantity + " items to cart!");
            } else {
                toast.warning("You can only add up to 8 items!");
            }
            return {
                ...state,
                numberCart: state.numberCart + plus_number_cart
            }

        case INCREASE_QUANTITY:
            p_product = action.payload
            p_quantity = state.Carts.find((item) => {
                return p_product.id == item.product.id
            }).quantity;
            if (p_quantity == MAX_QUANTITY) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                Carts: state.Carts.map((item) => {
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
            p_quantity = state.Carts.find((item) => {
                return p_product.id == item.product.id
            }).quantity;
            if (p_quantity == 1) {
                return {
                    ...state,
                    numberCart: state.numberCart - 1,
                    Carts: state.Carts.filter(item => {
                        return item.product.id != p_product.id
                    })
                }
            }

            return {
                ...state,
                Carts: state.Carts.map((item) => {
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
        default:
            return state;
    }
}