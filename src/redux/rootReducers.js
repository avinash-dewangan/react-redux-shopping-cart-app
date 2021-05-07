import { combineReducers } from 'redux'
import shoppingReducer from "./Shopping/shopping-reducer"
import loginReducer from "./Login/login-reducer"

const rootReducer = combineReducers({
    shop: shoppingReducer,
    login: loginReducer,

});

export default rootReducer;