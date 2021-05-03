import React, { useState } from "react";
import { connect } from 'react-redux'
import { removeFromCart, adjustQty } from "../../redux/Shopping/shopping-action"

function CartItem({ itemData, removeFromCart, adjustQty }) {

  const [input, setinput] = useState(itemData.qty)
  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setinput(e.target.value);
    adjustQty(itemData.id, e.target.value)
  }
  return (
    <div className="col-xs-12">
      <div className="row">
        <table class="table table-borderless table-shopping-cart">
          <thead class="text-muted">
            <tr class="small text-uppercase">
              <th scope="col">Product</th>
              <th scope="col" width="120">Quantity</th>
              <th scope="col" width="120">Price</th>
              <th scope="col" class="text-right" width="200"> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 
              <div className="row">
                <div className="col-12">
                <div className="col-sm-12 col-5">
                <img style={{ width: "30%", margin: "auto" }}
                  src={itemData.image}
                  className="card-img-top"
                  alt={itemData.title}
                />
              </div>
              <div className="col-sm-12 col-9">
                  <h5 className="card-title">{itemData.title}</h5>
                  <p className="card-text">{itemData.category}</p>
                </div>
                </div>
                </div>
              </td>
              <td>
              <div className="mb-3">
                <div className="col-sm-12">
                  <label htmlFor="qty" className="form-label">
                    Qty
  </label>
                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    id="qty"
                    value={input}
                    onChange={onChangeHandler}
                  /></div>
              </div>
              </td>
              <td><p>Price : ${itemData.price}</p>
                </td>
              <td>
                <button onClick={() => removeFromCart(itemData.id)} className="btn btn-danger">Remove</button></td>
            </tr>
          </tbody></table>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value))
  }
}
export default connect(null, mapDispatchToProps)(CartItem);
