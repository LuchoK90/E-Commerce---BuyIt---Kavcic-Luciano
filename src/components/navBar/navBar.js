import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class navBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{backgroundColor:'#7bb3df'}}>
        <Link to="/"> <Menu.Item style={{color:'white'}} header>BUY IT!</Menu.Item> </Link>
       <Link to="/tecnologia"> <Menu.Item
          name='Tecnología'
          active={activeItem === 'Tecnología'}
          onClick={this.handleItemClick}
          style={{color:'white', fontWeight:900}}
        /> </Link>
       <Link to="/deportes"> <Menu.Item
          name='Deportes'
          active={activeItem === 'Deportes'}
          onClick={this.handleItemClick}
          style={{color:'white', fontWeight:900}}
        /></Link>
         <Link to="/musica"><Menu.Item
          name='Música'
          active={activeItem === 'Música'}
          onClick={this.handleItemClick}
          style={{color:'white', fontWeight:900}}
        /> </Link>
      </Menu>
    )
  }
}