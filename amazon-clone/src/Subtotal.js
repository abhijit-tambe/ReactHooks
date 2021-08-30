import React from 'react'
import './Subtotal.css';

import CurrencyFormat from "react-currency-format"

function Subtotal({price,items} ) {
    return (
        <div className="subtotal">
            <p> Subtotal ({items} items) : <strong>
           <CurrencyFormat
              decimalScale={2}
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              > </CurrencyFormat>
              </strong>
             </p>
             <small className="subtotal__gift" >
                 <input type = "checkbox"/> This order contains a gift
             </small>
              
            <button className="subtotal__button"> Proceed to Checkout </button>
        </div>
    )
}



export default  Subtotal;