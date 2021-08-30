const RemoveItem = (val)=>{
    return {
        type:"REMOVE_ITEM",
        payload:{id:val}
    }
}


export default RemoveItem;