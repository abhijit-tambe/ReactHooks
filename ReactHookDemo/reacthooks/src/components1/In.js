import React,{useState} from 'react'


function In() {
    const [input ,setInput] = useState({});
    
    
    const valueChange = (event)=>{
        // event.preventDefault();
        // console.log(event);
        setInput({
            ...input,
            [event.target.name]:event.target.value,
        })


    }


    const submitClicked = (e)=>{
        e.preventDefault();
        console.log(input);
    }


    return (
        <div>
           <form onSubmit={submitClicked}>
               <label htmlFor="name">FirstName</label>
               <input placeholder="John" name="firstName" type="text" onChange={valueChange} ></input>
               <label htmlFor="password">FirstName</label>
               <input placeholder ="Doe" name="password" type="password" onChange={valueChange}></input>
               <button type="submit"> login</button>
           </form> 
        </div>
    )
}

export default In;