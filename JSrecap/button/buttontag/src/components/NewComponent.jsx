import  { Component } from 'react'
import bellclose from './bellclose.png';
import bellopen from './bellopen.jpg';


export class NewComponent extends Component {
    constructor(props) {
      super(props)
    
    
      this.state = {
        messege: "subscribe to channel",
        sub:"Subscribe",
        imageURL: bellclose
      }
    }
    styles={
        FontStyle:"bold",
        color: "teal"

      }
     
      Buttonchange=()=>
      {
        
        this.setState({
            messege:"Hit the bell icon button and never miss an update ",
            sub:"Subscribed",
            imageURL: bellopen

        })
      }
      ImageChange=()=>
      {
        
        this.setState({
            messege:"thank you you get notified  ",
            sub:"Subscribed",
            imageURL: bellopen

        })
      }
  render() {
    return (
      <div>
        <h3 style={this.styles}>{this.state.messege}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p>
            <img onClick={this.ImageChange}style={{width:"30px", height:"30px",justifyContent:"center",alignContent:"center",alignItems:"center"}}src={this.state.imageURL} alt="" />
        </p>

      </div>
    )
  }
}

export default NewComponent