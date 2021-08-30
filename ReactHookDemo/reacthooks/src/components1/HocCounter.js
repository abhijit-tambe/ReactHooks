import React, { Component } from 'react'

import {useState} from 'react';



const UpdatedComponent = (OldComponent) =>{
    // function NewComponent(props){
        
    //     const [counter,setCounter] = useState(5);
    //     const updateC = ()=>{
    //         setCounter(counter+1);
    //     }
    //      return(
            
    //         <OldComponent  {...props} count = {counter} inc = {()=>updateC()}/>)
        
    // }
    // return NewComponent;

    class NewComponent extends Component{
            constructor(){
                super();
                this.state = {
                    counter:0,
                }
                
                
                this.increment = this.increment.bind(this);
            }
            
            increment (){
                this.setState(prevState=>{ 
                    return {
                        counter: prevState.counter+1,
                    }
                    
                })                
            }

        render(){
            const props = this.props;
            return(
                
                <OldComponent {...props} count = {this.state.counter} inc ={this.increment}/>
            )
        }
    }

    return NewComponent;
    
}

export default UpdatedComponent;


