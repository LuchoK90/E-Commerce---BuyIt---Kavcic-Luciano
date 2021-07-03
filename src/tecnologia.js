import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import ItemList from './components/itemList/ItemList.js';


class Tecnologia extends React.Component{
    render(){
        return <div>
             <Header />
      <NavBar />
      <p className="Title" style={{fontSize:'38px'}}>TECNOLOGIA</p>
      <ItemList categoria={"Tecnología"}/>
        </div>
        }
}

export default Tecnologia;