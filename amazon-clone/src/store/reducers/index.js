const initialState ={
    basket :[],
    totalPrice:0,
    totalItems:0

}


const reducer = (state = initialState, actions)=>{   
    let newState = state;
    let cost = state.totalPrice;
    let totalItems = state.totalItems
    switch(actions.type){
        case "ADD_ITEM":
            // const newBasket =;
            // newBasket.push(actions.payload);
            // console.log(actions.payload);
            // let idx = newState.basket.findIndex(item=>item.id===actions.payload.id);
            // if(idx!==-1){
            //     let item =newState.basket[idx];
            //     newState 
            // }
             cost = newState.totalPrice;
            console.log(actions.payload.cost)
            if(newState.basket.length<1){
                newState.basket.push(actions.payload);
                cost=cost+actions.payload.cost;
                totalItems+=1;
                // cost= parseFloat(cost).toFixed(2);
            }else{
            let idx = newState.basket.findIndex(item => item.id===actions.payload.id);
            if(idx===-1){
                newState.basket.push(actions.payload);
                cost=cost+actions.payload.cost;
                totalItems+=1;
                // cost= cost.toFixed(2);
            }else{
                newState.basket[idx].quantity+=1;
                cost=cost+actions.payload.cost;
                totalItems+=1;
                // cost= cost.toFixed(2);
            }
            
            // newState.basket.map(item=>{
            //     if(item.id === actions.payload.id){
            //         item.quantity = item.quantity+1;
            //         cost+=item.cost;
            //         return item;
            //     }
            //     return item;
            // });
            }
            cost = Math.round((cost + Number.EPSILON) * 100) / 100;
            console.log("add hit2")
            return {
                ...state,
                basket: [...newState.basket],
                totalPrice: cost,
                totalItems: totalItems
            }
            // break;
        case "REMOVE_ITEM":
            // // let newBasket1 =[;
            // let newbas1= [...state.basket].filter( item => {console.log('id:',item.id ,"payloadid",actions.payload.id); return item.id !== actions.payload.id});
            // console.log("hit",state);
            // console.log('delete:',newbas1);
            //  cost = newState.totalPrice;
             cost = newState.totalPrice;
            let idx = newState.basket.findIndex(item => item.id===actions.payload.id);
            if(newState.basket[idx].quantity>1){
                newState.basket[idx].quantity-=1;
                totalItems-=1;
                cost=cost-newState.basket[idx].cost;
                // cost= cost.toFixed(2);
            }else{
                cost=cost-newState.basket[idx].cost;
                totalItems-=1;
                // cost= cost.toFixed(2);
                newState.basket = newState.basket.filter(item => item.id!==actions.payload.id);
                
            }
            cost = Math.round((cost + Number.EPSILON) * 100) / 100;
            return{
                ...state,
                totalPrice : cost,
                basket : [...newState.basket],
                totalItems:totalItems
                // totalPrice : state.totalPrice-actions.payload.cost 
                // .filter(x=>x!==actions.payload.value)
            }
        default :
        return {
            ...state
        }
    }

}


export default reducer;