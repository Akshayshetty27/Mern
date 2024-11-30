import React, { Component } from 'react'
import PureComponet from './PureComponet';
import Regular from './Regular';
export class Parent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"Simple Learning"
        }
    }
    componentDidMount(){
        setInterval(()=>{
        this.state({
            name:"Simple Learn"
        });
    },3000);
    }

  render() {
    return (
      <div>
        i am the parent 
        <Regular name={this.state.name}/>
        <PureComponet name={this.state.name}/>
      </div>
    )
  }
}

export default Parent