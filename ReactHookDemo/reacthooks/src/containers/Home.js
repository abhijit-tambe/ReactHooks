
import React,{ Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        // this.interval=false;
        this.state={
            running:false
        }
    }

    componentDidMount(){
        // this._interval=false;
      this.interval=  setInterval(()=>{
             this.setState({
                 ...this.state,
                running:!this.state.running,
             })
        },1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    


    render(){
        return(
            <div>
            {this.state.running &&<div>Home</div>}
            </div>
        )
    }
}


export default Home;