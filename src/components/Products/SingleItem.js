import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-action";

function SingleItem({ currentItem, addToCart }) {
    console.log(currentItem);

  
    return (
        <div className="container">
            <div className="card">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <img style={{"width":"50%"}}
                            src={currentItem.image}
                            className="card-img-top"
                            alt={currentItem.title}
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="card-body">
                            <h5 className="card-title">{currentItem.title}</h5>
                            <p className="card-text">{currentItem.category}</p>
                            <p>Price : ${currentItem.price}</p>
                            <p>{currentItem.description}</p>
                            <button
                                onClick={() => addToCart(currentItem.id)}
                                className="btn btn-primary"
                            >
                                <i className="fa fa-shopping-cart"></i> Add Cart
              </button>
              
              <button
                               
                                className="btn btn-dark disabled"
                            >
                                 Buy Now
              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
