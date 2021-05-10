import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar({ cart }) {

  const [cartCount, setcartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    })

    setcartCount(count)

  }, [cart, cartCount]);

  const token = localStorage.getItem("token")
  let isLoggedIn = false
  if (token !== null) {
    isLoggedIn = true
  }

  return (
    <div className="" style={{ paddingBottom: "100px" }}>

      <nav style={{
        position: "fixed",
        width: "100%",
        zIndex: "10"
      }} className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          {isLoggedIn}
          <Link to="/" className="navbar-brand">
            <i className="fa fa-cart-arrow-down" style={{ fontSize: "50px" }} aria-hidden="true"></i> Shopping Mart
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {isLoggedIn ? (<Link to="/logout" className="nav-link" >
                  Logout <span className="sr-only">(current)</span>
                </Link>) : (<Link to="/login" className="nav-link" >
                  Login <span className="sr-only">(current)</span>
                </Link>)}

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Link</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">User Name</Link>
                  <Link className="dropdown-item" to="#">Action</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">Product Detials</Link>
                </div>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link disabled" to="#">Disabled</Link>
              </li> */}
            </ul>

          </div>
          <Link to="/cart" style={{ position: "relative" }}>
            <p style={{
              position: "absolute",
              right: "2px",
              zIndex: "1",
              top: "-15px",
              background: "green",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              color: "#fff",
              textAlign: "center"
            }}><span>{cartCount}</span></p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>

          </Link>


        </div>
      </nav>
    </div >
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Navbar);
