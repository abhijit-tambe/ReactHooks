import {createStore} from 'redux';
import reducer from './reducers/index'

function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);

    }catch(e){
        console.log(e);
    }
}

function getFromLocalStorage(){
    try{
    let serializedState  = localStorage.getItem('state');
    console.log('get form ls:',serializedState);
    if(serializedState===null)
        return undefined;
    else{
        return JSON.parse(serializedState);
    }
}catch(e){
        console.log(e);
        return undefined;
    }
   
}


const persistedState = getFromLocalStorage();

const store = createStore(reducer,persistedState);

store.subscribe(()=>{
    saveToLocalStorage(store.getState());
    console.log('store: ',store.getState());
})

export default store;