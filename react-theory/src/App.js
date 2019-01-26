import React, { Component } from 'react'; // обязательный импорт
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2017}
    ]
  }

  


  render() {
    const divStyle = {
      textAlign : 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
      <h1>Hello World!</h1>
        
     

       <Car name={cars[0].name} year={cars[0].year}/> 
       <Car name={'Audi'} year={2017}/>
       
       
      </div>
    );
    // return React.createElement(
    //   'div',
    //   {
    //     className: 'App'
    //   },
    //   React.createElement(
    //     'h1',
    //     null),
    //   'Hello World!!!'
    //)
  }
}

export default App;
