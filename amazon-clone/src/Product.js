import React from "react";
import "./Product.css";
import AddItem from './store/actions/AddItem'
import {connect} from 'react-redux';
import {useEffect} from 'react';
// const Product = ({ id, ratings, name, img, cost ,flexval ,length }) => {
//   const f= flexval?flexval:1;
//   // console.log(Product);
//   return (
    
//     <div className="product" style={{flex:f}}>
    
//     <img className="product__image" src={img} />
//       <div className="product__info">
//         <p>{name}</p>
        
//         <div className="product__rating">
//           {Array(ratings)
//             .fill()
//             .map(() => (
//               <p>⭐</p>
//             ))}
//         </div>
//         {/* <div>
//             {new Array(ratings).fill().map(()=><span>★</span>)}
//             </div> */}
//             <p className="product__price">
//           <small>$</small>
//           <strong>{cost}</strong>
//           <p> {length}</p>
//         </p>
//       </div>
      
//       <button   className="product__addToCart">Add to Cart</button>
//     </div>
//   );
// };

const Product = (props) => {
  const f= props.flexval?props.flexval:1;
  useEffect(() => {
    console.log(props);
   
  },[]);

  const addItems =()=>{
    const item = {
     name: props.name,
     id: props.id,
     image:props.img,
     rating:props.ratings,
     cost:props.cost,
     quantity:1
    }
    props.add(item);
  }
  return (
    
    <div className="product" style={{flex:f}}>
    
    <img className="product__image" src={props.img} />
      <div className="product__info">
        <p>{props.name}</p>
        
        <div className="product__rating">
          {Array(props.ratings)
            .fill()
            .map((x,i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {/* <div>
            {new Array(ratings).fill().map(()=><span>★</span>)}
            </div> */}
          <p className="product__price">
          <small>$</small>
          <strong>{props.cost}</strong>
          
        </p>
      </div>
      
      <button onClick={()=>addItems()} className="product__addToCart">Add to Cart</button>
    </div>
  );
};
// const mapStateToProps= ()=>{
//     // return{
//     //   length : state.basket.length,
//     // }
// }

const mapDispatchToProps = (dispatch)=>{
return {
  add: (val)=> {return dispatch(AddItem(val))}
}
}


export default connect(()=>{return {}},mapDispatchToProps)(Product);
