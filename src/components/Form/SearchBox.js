import React, { useState } from 'react'

function SearchBox({ products, setsearchResult, setFlag, setPageNumber }) {
    const [searchTerm, setsearchTerm] = useState("")
    const searchHandler = (e) => {
        setsearchTerm(e.target.value)
        if (searchTerm !== "") {
            const newProductList = products.filter((prod) => {
                return Object.values(prod).join("").toLowerCase().includes(searchTerm.toLowerCase())
            });
            setsearchResult(newProductList)
        }
        setFlag(true)
        setPageNumber(0);
    }
    return (
        <input
            className="form-control me-2"
            type="search"
            placeholder="Search for product brand and more"
            aria-label="Search"
            value={searchTerm}
            onChange={searchHandler}
            onPaste={searchHandler}
            onKeyUp={searchHandler}
            onKeyDown={searchHandler}
            onKeyPress={searchHandler}
        />
    )
}

export default SearchBox
