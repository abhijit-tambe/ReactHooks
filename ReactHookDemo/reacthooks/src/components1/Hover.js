import React from 'react';
import HocCounter from './HocCounter';

function Hover ({name,count ,inc}){
    return( 
        <h1 onMouseOver={inc}> {name} times {count} </h1>
    )
}


export default HocCounter(Hover);
