import React, { Component, useState } from 'react'

export class Click extends Component {
    constructor(props) {
      const[count,second] = useState(0)
    }
  render() {
    return (
      <div>
       <button onClick={this.updateClick}> clicked {this.count} time</button>
      </div>
    )
  }
}



export default Click