import React from 'react';
import logo from './ecommerceLogo.png';
import './App.css';
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';

class Home extends React.Component{
    render(){
       return <div className='App'>
       <Header />
      <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title" style={{fontSize:'38px'}}>
        BUY IT!
        </p>
        </div>
        }
}

export default Home;