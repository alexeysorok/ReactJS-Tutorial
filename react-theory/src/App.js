import React, { Component } from 'react'; // обязательный импорт
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  render() {
    const divStyle = {
      textAlign : 'center'
    }

    return (
      <div style={divStyle}>
      <h1>Hello World!</h1>
        
       <Car name={'Ford'} year={2018}/> 
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
