import React from 'react';
import logo from './ecommerceLogo.png';
import './App.css';
import Header from './components/header/header.js';
import CardComponent from './components/cardComponent/cardComponent.js';
import NavBar from './components/navBar/navBar.js';
import ItemCount from './components/itemCount/itemCount.js';
import {Items} from './components/itemList/items.js';



class App extends React.Component{

  constructor(){
    super();
    this.state = {
      name: "Eduardo"
    };
  }

  componentDidMount(){
  {/*   setTimeout(() => { this.setState ({name: "Daniel"});}, 2000); */}
  }

  render(){
    return <div className="App">
     
      <Header />
      <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title" style={{fontSize:'38px'}}>
        BUY IT!
        </p>
       {/*  <div className="Cards">
        <CardComponent  name={"Luciano"} description={"Alumno del curso de React JS"} date={"Mayo 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        <CardComponent  name={"Francisco"} description={"Alumno del curso de React JS"} date={"Junio 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        <CardComponent  name={"Ricardo"} description={"Alumno del curso de React JS"} date={"Junio 2021"} img={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
        </div>  */}
        <br></br>  
        <p>
       {/*  {this.state.name} */}
        </p>

     <Items />

        <br></br>
        <ItemCount /> <br></br>
    </div>
    }
}

export default App;
