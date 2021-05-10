import * as actionTypes from "./shopping-types"
import axios from 'axios'


export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}


export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    }
}

export const fetchProductRequest = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_REQUEST,
    }
}


export const fetchProductSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_ERROR,
        paylod: error
    }
}


export const addProductSucess = (product) => {
    console.log("addProductSucess calling")
    return {
        type: actionTypes.CREATE_PRODUCT,
        payload: product,

    }
}

//raxc
export const getProduct = (id) => {
    return (dispatch) => {
        //dispatch(fetchProductRequest)
        axios.put(`${process.env.REACT_APP_API_URL}/products`, id)
            .then(res => {
                const returnproduct = res.data
                console.log(returnproduct)
                dispatch({
                    type: actionTypes.GET_PRODUCT,
                    payload: id
                })
            })
            .catch(error => {
                //const errorMsg = error.message
            })
    }
}



export const addProduct = (product) => {
    console.log("add product calling")
    return (dispatch) => {
        //dispatch(fetchProductRequest)
        axios.post(`${process.env.REACT_APP_API_URL}/products`, product)
            .then(res => {
                // console.log(res)
                const returnproduct = res.data
                console.log(returnproduct)
                dispatch(addProductSucess(returnproduct))
            })
            .catch(error => {
                //const errorMsg = error.message
                // dispatch(fetchProductFailure(errorMsg))
            })
    }
}


export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest)
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
            .then(res => {
                // console.log(res)
                const products = res.data
                dispatch(fetchProductSuccess(products))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductFailure(errorMsg))
            })
    }
}