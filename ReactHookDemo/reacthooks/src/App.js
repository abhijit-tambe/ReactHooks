import React, { useReducer } from "react";
import HookCounter from "./components/HookCounter";
// import logo from './logo.svg';
import "./App.css";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import HookIntervalCounter from "./components/HookIntervalCounter";
import DataFetching from "./components/DataFetching";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import ComponentA from "./components/ComponentA";

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ contextCount: count, contextDispatcher: dispatch }}
    >
      <div className="App">
        {count}

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* <HookCounter /> */}
        {/* <HookCounter2 /> */}
        {/* <HookCounter3 /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter /> */}
        {/* <HookIntervalCounter /> */}
        {/* <DataFetching /> */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        <ComponentA />
      </div>
    </CountContext.Provider>
  );
}

export default App;
