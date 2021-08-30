import React,{Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
      super(props);
  
      this.inputRef = React.createRef();
    }
  
    render() {
      return (<>
        <button ref={this.inputRef}>lala</button>
        <input type="text"  ref={this.inputRef} />
      </>);
    }
  
    componentDidMount() {
      this.inputRef.current.focus();
    }
  }
  export default MyComponent;