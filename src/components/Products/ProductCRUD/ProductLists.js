import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination';
function ProductLists({ productList }) {

    // console.log(productList)

    // For Pagination declaration 

    const [search, setSearch] = useState('')

    const [pageNumber, setPageNumber] = useState(0)
    const productPerPage = 4;
    const PageVisited = pageNumber * productPerPage
    const pageCount = Math.ceil(productList.length / productPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }


    const productDisplay = productList.slice(PageVisited, PageVisited + productPerPage).map((product) => {
        return (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td><img src={product.image} alt={product.image} style={{ width: "60%" }} /></td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td><Link to={`/product-edit/${product.id}`}><i className="fa fa-edit"></i></Link></td>
                <td><Link to={`/product-delete/${product.id}`}><i className="fa fa-trash"></i></Link></td>

            </tr>
        )
    })

    return (
        <div className="col-sm">
            <h1>Product List</h1>
            <hr />
            <input className="form-control me-2" type="search"
                placeholder="Search for product brand and more"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="on" />

            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>title</th>
                        <th>price</th>
                        <th>category</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {productDisplay}
                </tbody>
            </table>
            <Pagination pageCount={pageCount} changePage={changePage} />
        </div>

    )
}

export default ProductLists
