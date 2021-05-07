
import { LOGIN_USER, LOGOUT_USER } from "./login-action-type"
import axios from 'axios'


export const loginUser = (username, password) => {
    return function (dispatch) {
        if (username === "a" && password === "b") {
            localStorage.setItem("token", "fwourowjslfwlksdfskfoiweqrkds");
            dispatch({
                type: LOGIN_USER,
                payload: "message",
                isLoggedIn: true
            });
        }
    }

}

export const LogoutUser = () => {
    return function (dispatch) {
        localStorage.removeItem('token');
        console.log(localStorage)
        dispatch({ type: LOGOUT_USER });
    }
}