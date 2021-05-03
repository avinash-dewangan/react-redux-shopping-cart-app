import React, { useState, useEffect } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
//import axios from 'axios'
import { fetchProducts } from "../../redux/Shopping/shopping-action"
import ProductFilterSideBar from './ProductFilterSideBar'
import Slider from '../Form/Slider'
import SearchBox from '../Form/SearchBox'
import Pagination from "../Pagination/Pagination"

function ProductList({ products, fetchProducts }) {

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])


    const [searchResult, setsearchResult] = useState([])
    const [flag, setFlag] = useState(false)

    // For Pagination declaration 
    const [pageNumber, setPageNumber] = useState(0)
    const productPerPage = 9;
    const PageVisited = pageNumber * productPerPage
    const pageCount = Math.ceil(flag ? searchResult.length / productPerPage : products.length / productPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    //display the products
    const displayProduct = flag ? searchResult.slice(PageVisited, PageVisited + productPerPage).map((prod) => {
        return (
            <Product key={prod.id} productData={prod} />
        )
    }) : products.slice(PageVisited, PageVisited + productPerPage).map((prod) => {
        return (
            <Product key={prod.id} productData={prod} />
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-3">

                    <ProductFilterSideBar
                        products={products}
                        setsearchResult={setsearchResult}
                        setFlag={setFlag}
                        setPageNumber={setPageNumber}
                    />
                    <Slider
                        products={products}
                        setsearchResult={setsearchResult}
                        setFlag={setFlag}
                        setPageNumber={setPageNumber}
                    />
                </div>

                <div className="col-xs-12 col-md-9">
                    <SearchBox
                        products={products}
                        setsearchResult={setsearchResult}
                        setFlag={setFlag}
                        setPageNumber={setPageNumber}
                    />
                    {displayProduct}
                    {displayProduct.length < 6 ? ("") : (
                        <Pagination pageCount={pageCount} changePage={changePage} />
                    )}

                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        //setting the product list
        products: state.shop.products,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        //calling the api function
        fetchProducts: () => dispatch(fetchProducts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
