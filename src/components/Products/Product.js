import React from "react";
import {connect} from 'react-redux'
import {addToCart, loadCurrentItem} from "../../redux/Shopping/shopping-action"
import {Link} from "react-router-dom"
function Product({productData, addToCart, loadCurrentItem}) {
  return (
  
<div className="col-md-4 col-xs-12 p-2" style={{"height": "435px", textAlign:"center", float:"left"} }>
      <div className="card" style={{ display:"table-cell", verticalAlign:"middle", height:"inherit"}}>
      <Link to={`product/${productData.id}`} onClick={()=>loadCurrentItem(productData)}>
        <img  style={{"width": "30%", margin:"auto"}} src={productData.image} className="card-img-top" alt={productData.title} />
        <div className="card-body">
          <h5 className="card-title">{productData.title}</h5>
          <p className="card-text">
          {productData.category}
          </p>
          <p>Price : ${productData.price}</p>
          {/* <button onClick={()=>addToCart(productData.id)} className="btn btn-primary m-1">
           Add Cart
          </button>
         
          <button onClick={()=>loadCurrentItem(productData)} className="btn btn-secondary m-1">
           View
          </button>  */}
       
        
        </div>
        </Link>
      </div>
    </div>
   
    
  );
}

const mapDispatchToProps= dispatch=>{
  return{
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem:(item)=>dispatch(loadCurrentItem(item)),
  }
}
export default connect(null,mapDispatchToProps)(Product);
