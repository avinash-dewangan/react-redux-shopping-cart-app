import React from 'react'
import './App.scss';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import SingleItem from './components/Products/SingleItem';
import { connect } from 'react-redux'

function App({ currentItem }) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
          {!currentItem ? (
            <Redirect to="/" />
          ) : (<Route exact path="/product/:id" component={SingleItem} />)}
        </Switch>
      </div>
    </Router >
  );
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem,
  }
}
export default connect(mapStateToProps)(App);
