import React, { Component } from 'react'

export class Click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      };
    }
    updateClick=()=>{
this.setState({count : this.state.count +1 });
    }
  render() {
    return (
      <div>
       <button onClick={this.updateClick}> clicked 1 time</button>
      </div>
    )
  }
}

export default Click;