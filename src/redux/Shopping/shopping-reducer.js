import * as actionTypes from "./shopping-types"

const INITIAL_STATE = {
  products: [], //{id, title, desc, price, img}
  cart: [], //{id, title, desc, price, img, qty}
  currentItem: null,
  loading: false,

}
const shoppingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(prod => prod.id === action.payload.id)
      const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)

      return {
        ...state,
        cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }],
      }



    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      }
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item),
      }
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }

    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: ""
      }
    case actionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload
      }
    default:
      return state;

  }
}

export default shoppingReducer;