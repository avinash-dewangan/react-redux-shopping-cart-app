import React from 'react'

import { Redirect } from "react-router-dom";

function Logout(props) {
    console.log(props)


    localStorage.removeItem("token")

    return (
        <Redirect to="/" />
    )
}

export default Logout
