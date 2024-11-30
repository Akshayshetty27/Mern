import { Component } from "react"

 class ClassComponents extends Component {
  render() {
    return (
      <div>
        <h1> Hwllo {this.props.name}  {this.props.lname}Welcome to Simple learning</h1>
      </div>
    )
  }
}

export default ClassComponents