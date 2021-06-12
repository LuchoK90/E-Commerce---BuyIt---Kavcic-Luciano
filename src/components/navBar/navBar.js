import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class navBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{backgroundColor:'#7bb3df'}}>
        <Menu.Item style={{color:'white'}} header>BUY IT!</Menu.Item>
        <Menu.Item
          name='Tecnología'
          active={activeItem === 'Tecnología'}
          onClick={this.handleItemClick}
          style={{color:'white', fontWeight:900}}
        />
        <Menu.Item
          name='Deportes'
          active={activeItem === 'Deportes'}
          onClick={this.handleItemClick}
          style={{color:'white', fontWeight:900}}
        />
        <Menu.Item
          name='Música'
          active={activeItem === 'Música'}
          onClick={this.handleItemClick}
          style={{color:'white', fontWeight:900}}
        />
   
      <Menu.Item
          name='Otros'
          active={activeItem === 'Otros'}
          onClick={this.handleItemClick}
          style={{color:'white', fontWeight:900}}
        />
      </Menu>
    )
  }
}