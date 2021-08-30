import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch ,Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Login2 from './Login2';
 
  
function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
     <Route path="/checkout">
     <Header/>
       <Checkout/>
     </Route>
     <Route path ="/login">
       {/* <Login/> */}
       <Login2/>
     </Route>
     <Route path="/">
     <Header/>
      <Home/>
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
