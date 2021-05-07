import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";
import ProductAdd from '../Products/ProductCRUD/ProductAdd';

function Admin(props) {
    console.log(props)

    const token = localStorage.getItem("token")

    return token === null ? <Redirect to="/login" /> : (
        <div>
            <ProductAdd />
        </div>
    )
}

export default Admin
