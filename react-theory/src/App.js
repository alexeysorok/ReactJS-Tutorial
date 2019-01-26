import React, { Component } from 'react'; // обязательный импорт
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

class App extends Component { 

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2017}
    ],
    pageTitle: 'React Components'
  }

  // changeTitleHandle1() {
  // способ записи функции
  // }

  changeTitleHandle = (newTitle) =>{
    // console.log('Clicked')
    // const  oldTitle = this.state.pageTitle
    // const newTitle = oldTitle + '(changed)'
    this.setState({
      pageTitle: newTitle
    }) // заново будет вызван render
    
  }

  


  render() {
    const divStyle = {
      textAlign : 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>

      <button onClick={this.changeTitleHandle.bind(this, 'Changed!')}>Change title</button>
        
     

       <Car 
        name={cars[0].name}
        year={cars[0].year}
        onChangeTitle={this.changeTitleHandle.bind(this, cars[0].name)}/> 
       <Car 
        name={'Audi'} year={2017}
        onChangeTitle={() => this.changeTitleHandle(cars[1].name)} // этот метод больше расходует память 
       />
       
       
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
