import React from "react";
import { connect } from "react-redux";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout({ basket,totalPrice ,totalItems}) {
  return (
    <div className="checkout">
    <div className ="chekout__left">
      <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/01/handmade/2020/Campaigns/PD/HM_HP_EventTile_Event_D-4.jpg"
          ></img>
      {basket?.length !== 0 ? (
        <div className="checkout__container">
          <h2 className="checkout__title">Your Shopping Cart:</h2>
         
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
      ) : (
        <div>
          <h2>Your GamersMart Cart is empty.</h2>
        <p>you have no items in your basket. to buy on click add to cart</p>
        </div>
      )}
      </div>
      {basket.length>0&&<div className="checkout__right">
        <Subtotal price={totalPrice} items={totalItems} />
      </div>}
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
