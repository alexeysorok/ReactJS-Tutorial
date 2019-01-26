import React, { Component } from 'react'; // обязательный импорт
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const divStyle = {
      'text-align' : 'center'
    }
    return (
      <div style={divStyle}>
      <h1>Hello World!</h1>
        
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
