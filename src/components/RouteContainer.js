import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from "../components/Login/Login"
import Admin from "../components/Login/Admin"
import Logout from "../components/Login/Logout"
import ProductList from "../components/Products/ProductList"
import SingleItem from "../components/Products/SingleItem"
import Cart from "./Cart/Cart"
import Test from './Login/Test'
import ProductAdd from './Products/ProductCRUD/ProductAdd'
import EditProduct from './Products/ProductCRUD/EditProduct'


function RouteContainer({ currentItem }) {
    return (
        <Switch>
            <Route exact path="/"><ProductList /></Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/admin" component={Admin} />

            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product-edit/:id" component={ProductAdd} />
            <Route exact path="/product-delete/:id" component={EditProduct} />

            {!currentItem ? (
                <Redirect to="/" />
            ) : (<Route exact path="/product/:id" component={SingleItem} />)}
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem,
    }
}
export default connect(mapStateToProps)(RouteContainer)

