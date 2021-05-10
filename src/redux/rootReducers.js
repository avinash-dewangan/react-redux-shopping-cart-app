import { combineReducers } from 'redux'
import shoppingReducer from "./Shopping/shopping-reducer"
import loginReducer from "./Login/login-reducer"
import reducer from "../components/Test/Redux/reducer"
import { reducer as formReducer } from "redux-form"
const rootReducer = combineReducers({
    shop: shoppingReducer,
    login: loginReducer,
    reducer,
    form: formReducer

});

export default rootReducer;