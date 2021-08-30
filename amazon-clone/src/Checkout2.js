import React from "react";
import { connect } from "react-redux";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout({ basket,totalPrice }) {
  return (
    <div className="checkout">
      <div className="chekout__banner">
        <span className="checkout__add">
          <img
            className="checkout__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2020/Campaigns/PD/HM_HP_EventTile_Event_D-4.jpg"
          ></img>
        </span>
        <span>
          <small className="dx">sponsored</small>
          <i className="fa fa-info-circle"></i>
        </span>
      </div>

      {basket?.length !== 0 ? (
        <div className="checkout__container">
          <h2 className="checkout__title">Your Shopping Cart:</h2>
          <div className="checkout__products">
          {basket.map((item, i) => {
              console.log("map id ",item.id );
            return (
              <CheckoutProduct
                key={i}
                id= {item.id}
                name={item.name}
                cost={item.cost}
                image={item.image}
                rating={item.rating}
                quantity={item.quantity}
              ></CheckoutProduct>
            );
          })}
          </div>
         <p className="checkout__total"> Total cart Items : <small>$</small> <strong>{totalPrice}</strong></p>
        </div>
      ) : (
        <div>
          <h2>Your GamersMart Cart is empty.</h2>
        </div>
      )}
    </div>
  );
}

const mapStateToprops = (state) => {
//   let sum = 0;
//   state.basket.forEach((x) => {
//     sum += x.cost;
//   });

  return {
    basket: state.basket,
    totalPrice: state.totalPrice,
    totalItems: state.totalItems
  };
};


export default connect(mapStateToprops)(Checkout);
