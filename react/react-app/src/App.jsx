// // import Messege from "./Messege"
// // import ListGroup from "./components/ListGroup";
// function App() {
// // const name="Mosh"
// return <div>
// {/* <div><h1>{name}</h1>
// <div>
//   <ListGroup/>
//   </div>  </div> */}
// </div>
// }

// export default App;
// function App()
// {
//   const abc=()=>
//   {
//     console.log("hello")
//   }
//   const name="Akshay"
//   // const age=21
//   return <div>
//   <h1>hello {name}</h1>
//   <button onClick={ abc }
//   > Change user </button>
  
//   </div>
// }
// export default App;
// import React from 'react'

// const App = () => {

//   let user= "Akshay";
  
//  const changeuser=()=>{
//   console.log(user)
//     user="shetty"
//     console.log(user)

//   }
//   return (
//     <div>
//       <h1>hello {user}</h1>
//       <button onClick={changeuser}>change user</button>
//     </div>
//   )
// }
import React, { useState } from 'react'

const App = () => {
let [a, setA] = useState(0)
const changeA=()=>
{
  setA(a=a+1)
}
const decrementA=()=>
{
  setA(a=a-1)
}
  return (
    <div>
      <h1> value of a :{a}</h1>
      <button onClick={changeA}> Increment </button>
      <button onClick={decrementA}> Decrement </button>
    </div>
  )
}

export default App
