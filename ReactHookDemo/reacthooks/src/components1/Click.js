import React from 'react';
import updateComponent from './HocCounter'

function Click({name,count,inc}) {
    const flag = false;
    if(flag){
    return(
        <>
        <p>{count}</p>
        <button onClick={()=>inc()}> {name}</button>
        </>
    )}
    else{
        return (null)
    }
}

export default updateComponent(Click);