import React, { useState } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../redux/Shopping/shopping-action";

function CartItem({ itemData, removeFromCart, adjustQty }) {
  const [input, setinput] = useState(itemData.qty);
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setinput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <>
      <div class="row">
        <div class="col-12 col-md-4">
          <img
            style={{ width: "30%", margin: "auto" }}
            src={itemData.image}
            className="card-img-top"
            alt={itemData.title}
          />
          <h5 className="card-title">{itemData.title}</h5>
          <p className="card-text">{itemData.category}</p>
        </div>
        <div class="col-3 col-md-2">
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
          />
        </div>

        <div class="col-3 col-md-3">
          <p>Price : ${itemData.price}</p>
        </div>
        <div class="col-2 col-md-3">
          <button
            onClick={() => removeFromCart(itemData.id)}
            className="btn btn-danger">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
