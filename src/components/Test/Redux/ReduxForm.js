import React, { useState } from 'react'
import { Field, reduxForm } from "redux-form"
import Profile from "./Profile"
function ReduxForm(props) {
    console.log(props)
    const { handleSubmit } = props
    const [showProfile, setShowProfile] = useState(false)
    return (
        <div>
            <h1>Redux Form Package</h1>
            <form onSubmit={handleSubmit((formValues) => {
                console.log(formValues)
                setShowProfile(true)
            })} action="">
                <label>First Name</label>
                <Field type="text" name="firstName" component="input"></Field><br />
                <label>Last Name</label>
                <Field type="text" name="lastName" component="input"></Field><br />
                <button type="submit">Submit it</button>
                <br />
                {showProfile ? <Profile /> : null}

            </form>


        </div>
    )
}

export default reduxForm({
    form: "myForm"
})(ReduxForm)
