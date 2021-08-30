import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';


function Login() {

    const [inputs,setInputs] = useState({email:'',password:''}); 


    function onChangeInputs (e){
       
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);
        
    }
    const  submitClicked=(event)=>{
        event.preventDefault();

    console.log(event);
    }
    return (
        <div className="login">
        <Link to="/">
        <img
        className="login__image"
        src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
        />
        </Link>
        <div className="login__container">
        <h1>Sign-in</h1>
           <form onSubmit = { submitClicked} className="login__form">
           <h5>E-mail {inputs.email}</h5> 
            <input name="email" defaultValue="user" onChange={(e)=>onChangeInputs(e)} type="email" className="login__input"/>
           <h5>password {inputs.password}</h5>
            <input name="password" defaultValue="pass" onChange={ onChangeInputs} type="password" className="login__input"/>
            <button   type = "submit">Sign in</button>
            </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button>Create your GamersMart account</button>
        </div>
        
        </div>
    )
}

export default Login
