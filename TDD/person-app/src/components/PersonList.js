import { render } from '@testing-library/react';
import React ,{Component} from 'react';

// export default class PersonList extends Component{
     
//     render(){
//         return(
//             <div>
//                 <ul>{this.props.people.map(x=>{
//                     console.log(x);
//                     return <li key={x}>{x}</li>
//             })}</ul></div>
//         )
//     }
// }

// export default class PersonList extends Component {
//     render() {
    
//     return (    <div><ul></ul></div>)
    
//     }
// }

export default ({people=[]}) => {
      return <ul>{ people.map((x,i)=>  <li key={i}>{x}</li>) }</ul>
}

// if(props.people &&props.people.length == 1){
//     return <ul><li></li></ul>
// }return <ul></ul>}
