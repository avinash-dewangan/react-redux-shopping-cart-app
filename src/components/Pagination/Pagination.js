import React from 'react'
import ReactPaginate from 'react-paginate'



function Pagination({ pageCount, changePage }) {
    //const [pageNumber, setpageNumber] = useState(0)
    //const pageCount = Math.ceil(flag ? searchResult.length / productPerPage : products.length / productPerPage);
    //const productPerPage = 9;
    //const PageVisited = pageNumber * productPerPage
    // const changePage = ({ selected }) => {
    //     setpageNumber(selected);
    // }
    const currentPage = 1
    return (
        <div className="col-md-12" style={{ float: "left" }}>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"previousBttn page-link"}
                nextLinkClassName={"nextBttn page-link"}
                disabledClassName={"disabled"}
                activeClassName={"active"}
                pageLinkClassName={"page-link"}
                pageClassName={"page-item"}
                forcePage={currentPage - 1}

            />
        </div>
    )
}

export default Pagination
