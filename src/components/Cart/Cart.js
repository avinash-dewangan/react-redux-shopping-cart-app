import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

import { connect } from 'react-redux'

function Cart({ cart }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItem, setTotalItem] = useState(0)
    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)
    const [shippingCharges, setshippingCharges] = useState(0)

    useEffect(() => {
        let items = 0;
        let price = 0;
        let taxPrice = 0;
        let discountPrice = 0;
        let grandTotalPrice = 0;
        let shippingChargesPrice = 0;

        cart.forEach((item) => {
            items += Math.ceil(item.qty);
            price += Math.ceil(item.qty * item.price);
            taxPrice += Math.ceil(price * 0.09);
            shippingChargesPrice += price>=500?0:40;
            
        })
        // console.log(price)
        // console.log(taxPrice)
        discountPrice = price >= 2000 ? 50 : 0;
        grandTotalPrice = price + taxPrice + shippingChargesPrice - discountPrice
        setshippingCharges(shippingChargesPrice)
        setGrandTotal(grandTotalPrice)
        setDiscount(discountPrice)
        setTax(taxPrice)
        setTotalPrice(price)
        setTotalItem(items)

    }, [cart, totalPrice, totalItem, setTotalPrice, setTotalItem])

    const cartItemList = cart.map((item) => (
        <CartItem key={item.id} itemData={item} />
    ))

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-xs-12">
                    {cartItemList}
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Cart Summary</h5>
                            <p>Total : ({totalItem} item)</p>
                            <p>Price : ${totalPrice}</p>
                            <p>Tax : ${tax}</p>
                            <p>Discount : ${discount}</p>
                            <p>Shipping Charges : {shippingCharges===0?"FREE":shippingCharges}</p>
                            <p>Total Amount : ${grandTotal}</p>
                            <button className="btn btn-secondary disabled">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
const mapStateToProp = state => {
    return {
        cart: state.shop.cart,
    }
}
export default connect(mapStateToProp)(Cart);
