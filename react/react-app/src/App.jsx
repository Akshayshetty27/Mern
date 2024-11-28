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

// import { useState } from "react"

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
// import  { useState } from 'react'

// const App = () => {
//   // start 
// let [a, setA] = useState(0)
// const changeA=()=>
// {
//   setA(a=a+1)
// }
// const decrementA=()=>
// {
//   setA(a=a-1)
// }
//   return (
//     <div>
//       <h1> value of a :{a}</h1>
//       <button onClick={changeA}> Increment </button>
//       <button onClick={decrementA}> Decrement </button>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// import  { useState } from 'react'
// const App = () => {

//   let [a ,change]=useState(0)
//   const changeState =()=>
//   {
//     change(a=a+1)
//   }
//   const changeA =()=>
//   {
//     change(a=a-1)
//   }
//   return (
//     <div>
//     <h1>count : {a}</h1>
//     <button onClick={changeState}>Increment</button>
//     <button onClick={changeA}>Decrement</button>
//     </div>
//   )
// }

// export default App

// import { Fragment } from 'react'
// import React from 'react'



// import Header from './components/Header'
// import Footer from './Footer'
// import Nav2 from './Nav2'

// const App = () => {
//   return (
//     <>
//     <nav className=' flex items-center'>
//       <Header/>
//       <Nav2/>
//       <div>
//         <h3>About</h3>
//         <h3>Contact</h3>
//         <h3> Services</h3>
//         <h3>Your Account </h3>
//       </div>
//     </nav>
//     <Footer/>
//     </>
//   )
// }

// export default App



import React from 'react'
import Card from './components/Card'

const App = () => {
  const userr="akshay"
  return (

   <>
   <Card  a={userr}  city="Bhopal" age={45}/>
   </>
  )
}

export default App