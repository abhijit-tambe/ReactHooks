import React,{useState} from 'react'
import './App1.css';
import Click from './components1/Click';
import Hover from './components1/Hover';
import In from './components1/In';
import MyComponent from './components1/MyComponent';
import Home from './containers/Home';


function App1() {
    const [item,setItem] = useState(false);


    const clickHandler = ()=>{
        setItem(!item);
    }

    return (
        <div>
            <Click name={"clicked"}/>
            <Hover name={"hovered"}/>
            <In/>
            <MyComponent/>
            <button type="button" onClick={clickHandler}>show</button>
            {item&&<Home/>}
        </div>
    )
}

export default App1
