import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addProduct, getProduct } from "../../../redux/Shopping/shopping-action"
import ProductLists from "./ProductLists"
import { useParams } from 'react-router-dom'
function EditProduct() {


    const formObject = {
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rating: '',
    }
    const { productId } = useParams();
    const [values, setValues] = useState(formObject)
    const dispatch = useDispatch();
    const productList = useSelector(state => state.shop.products)
    //const product = useSelector(state => state.shop.product)


    useEffect(() => {
        dispatch(getProduct(productId))
        console.log("dd")
    }, [productId])

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        //console.log(value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(values)
        console.log("calling onSubmitHandler")
        dispatch(addProduct(values))
        setValues(formObject)

    }

    return (
        <div className="container">
            <div className="row">
                <div class="col-sm">
                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <h1>Add Product</h1>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="email">Title</label>
                            <input type="text" className="form-control" name="title" value={values.title} onChange={onChangeHandler} id="title" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="number" className="form-control" name="price" value={values.price} onChange={onChangeHandler} id="price" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" className="form-control" name="description" value={values.description} onChange={onChangeHandler} id="description" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input type="text" className="form-control" name="category" value={values.category} onChange={onChangeHandler} id="category" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="img">img Url</label>
                            <input type="text" className="form-control" name="image" value={values.image} onChange={onChangeHandler} id="img" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rating">Rating</label>
                            <input min="0" max="5" type="number" className="form-control" name="rating" value={values.rating} onChange={onChangeHandler} id="rating" required />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
                <div class="col-sm">
                    <ProductLists productList={productList} />
                </div>
            </div>
        </div >
    )
}

export default EditProduct
