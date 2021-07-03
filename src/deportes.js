import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import ItemList from './components/itemList/ItemList.js';

class Deportes extends React.Component{
    render(){
        return <div>
           <Header />
      <NavBar />
      <p className="Title" style={{fontSize:'38px'}}>DEPORTES</p>
      <ItemList categoria={"Deportes"}/>
        </div>
        }
}

export default Deportes;