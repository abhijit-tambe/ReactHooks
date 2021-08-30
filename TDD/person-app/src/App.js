import React, {Component} from 'react';
import PersonList from './components/PersonList';

class App extends Component{
  constructor(){
    super();
    this.state={
      people:['jim','kim','tim'],
      total:1
    }
  }

  render(){
  return (
    <div className="App">
      <PersonList people = {this.state.people} />
    </div>
  );
  }
}

export default App;
