import React from 'react'
import './CheckoutProduct.css';
import {connect} from 'react-redux';
import RemoveItem from './store/actions/RemoveItem'

function CheckoutProduct({id, ratings, name, image, cost, remove,quantity }) {
    console.log("id from cp",id);
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src = {image}/>
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                {name}
            </p>
            <p className="checkoutProduct__price"> <small>$</small> <strong>{cost}</strong></p>
            <p>quantity:{quantity}</p>
            <button onClick={()=>remove(id)} className="checkoutProduct__delete">Delete</button>
            </div>
        </div>
    )
}

const mapDispatchToState= (dispatch) =>{
    return {
        remove : (productId) =>{return dispatch(RemoveItem(productId))}
    }
}


export default connect(()=>{return{}},mapDispatchToState)(CheckoutProduct)
