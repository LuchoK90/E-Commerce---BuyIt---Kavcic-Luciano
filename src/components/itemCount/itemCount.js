import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


  export default class itemCount extends Component {
    constructor(){
        super();
        this.state = {
          count:0,
          stock: 10
        };
      }
      handleCountUp = () => {
        if (this.state.count<10) {this.setState({ count: this.state.count + 1})}
      }
      handleCountDown = () => {
        if (this.state.count>0) {this.setState({ count: this.state.count - 1})}
      }
      render(){
  
        return ( <div>

            <h1>{this.state.count}</h1>
            <Button onClick={this.handleCountDown}>-</Button><Button onClick={this.handleCountUp}>+</Button>
        </div> )
    }
  }

