import React from 'react';
import logo from './ecommerceLogo.png';
import './App.css';
import Header from './components/header/header.js';
import CardComponent from './components/cardComponent/cardComponent.js';
import { Button } from 'semantic-ui-react'
import NavBar from './components/navBar/navBar.js';





class App extends React.Component{

  constructor(){
    super();
    this.state = {
      count:0,
    };
  }
  handleCountUp = () => {
    this.setState({ count: this.state.count + 1})
  }
  render(){
    return <div className="App">
     
      <Header />
      <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title">
          BUY IT!
        </p>
        <div className="Cards">
        <CardComponent  name={"Luciano"} description={"Alumno del curso de React JS"} date={"Mayo 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        <CardComponent  name={"Francisco"} description={"Alumno del curso de React JS"} date={"Junio 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        <CardComponent  name={"Ricardo"} description={"Alumno del curso de React JS"} date={"Junio 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        </div>
        <h1>{this.state.count}</h1>
        <Button onClick={this.handleCountUp}>Click Here</Button>
    </div>
    }
}

export default App;
