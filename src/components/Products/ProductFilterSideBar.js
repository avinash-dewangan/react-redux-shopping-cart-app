import React from 'react'

function ProductFilterSideBar({ products, setsearchResult, setFlag, setPageNumber }) {

    var map = {}
    products.map(function (product) {
        map[product.category] = undefined;
    });

    const selectCat = (e) => {
        e.preventDefault();
        setPageNumber(0);
        console.log(e.target.value);
        if (e.target.value === "allProducts") {
            setsearchResult(products)
            setFlag(false)
        } else {
            const productList = products.filter(prod => prod.category === e.target.value)
            setsearchResult(productList)
            setFlag(true)
        }

    }

    const productCatWise = Object.keys(map).map((prodCat, index) => {
        const productCount = products.filter(prodCatList => prodCatList.category === prodCat)
        return (
            <li key={index}><button href="#" onClick={selectCat} value={prodCat} >{prodCat}<span className="badge badge-pill badge-light float-right">{productCount.length}</span></button></li>
        )
    })

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Category</h5>
                <ul className="list-menu">
                    <li ><button href="#" onClick={selectCat} value="allProducts" >All Products<span className="badge badge-pill badge-light float-right">{products.length}</span></button></li>
                    {productCatWise}
                </ul>
            </div>
        </div>

    )
}

export default ProductFilterSideBar
