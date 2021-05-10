import React from 'react'
import { useHistory, Redirect, Link } from "react-router-dom";
import useForm from "../Form/useForm"
import validateInfo from "../validation/validateInfo"
function Login() {

    let formObject = {
        username: '',
        password: ''
    }

    const isNullToken = localStorage.getItem("token")
    const { handleChange, values } = useForm(validateInfo, formObject)
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        try {
            if (values.username === "a" && values.password === "b") {
                localStorage.setItem("token", "fwourowjslfwlksdfskfoiweqrkds");
                history.push("/admin");
            }
        } catch (e) {
            alert(e.message);
        }
    }

    return isNullToken !== null ? <Redirect to="/admin" /> : (
        <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form onSubmit={handleSubmit} id="login-form" className="form" >
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br />
                                    <input onChange={handleChange} value={values.username} type="text" name="username" id="username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br />
                                    <input onChange={handleChange} value={values.password} type="text" name="password" id="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    {/* <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br /> */}
                                    <button type="submit" className="btn btn-primary" value="submit">Submit</button>
                                </div>
                                <div id="register-link" className="text-right">
                                    <Link to="#" className="text-info">Register here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login

