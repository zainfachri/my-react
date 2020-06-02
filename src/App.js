import React, {Component} from 'react';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      number : 1
    }
  }

  handleClick(){
    const number = this.state.number + 1;
    this.setState({
      //number: number ==> dapat di persingkat menjadi
      number //Hanya berlaku ketika 'key' dan 'value' nya sama
    })
  }
  render(){
    return(
      
      <div className="main">
        <h2>{this.state.number}</h2>
        <button onClick={()=> this.handleClick()}>Increase Number</button>
      </div>
    );
  }
}

// import React, {Component} from 'react';
// import Coffee from './components/Coffee';
// import Glass from './components/Glass';
// import Saucer from './components/Saucer';

// export default class App extends Component{
//   componentWillMount(){
//     console.log('componentWillMount');
//   }
//   componentDidMount(){
//     console.log('componentDidMount');
//   }

//   componentWillReceiveProps(){

//   }
//   componentWillUnmount(){

//   }

//   render() {
//     console.log('render');
//     return (
//       <div>
//         <Coffee 
//           waterValue={1}
//           bean="robusta"
//           type="expresso"
//         />
//         <Glass color = "Blue"/>
//         <Saucer width = "10cm"/>
//       </div>
          
//     )
//   }
// }