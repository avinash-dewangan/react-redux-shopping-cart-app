import { LOGIN_USER, LOGOUT_USER } from "./login-action-type"
const initialState = {
    isLoggedIn: false,
    username: '',
    password: '',
    msg: '',
}


function loginReducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN_USER: return {
            ...state,
            msg: action.payload,
            isLoggedIn: action.isLoggedIn
        }

        case LOGOUT_USER: return {
            ...state,
            isLoggedIn: false
        }
        default: return state;
    }
}

export default loginReducer