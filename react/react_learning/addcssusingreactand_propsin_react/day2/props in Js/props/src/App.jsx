// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Student from './Student.jsx'
import Second from './Employee.jsx'
function App() {
  return (
    <>
    <h1> Student list S</h1>
     <Student name="akshay" age={30} isStudent={false}/>
     <br />
     <Student name="arun" age={20} isStudent={true}/>
<br />
<Student name=" Sandy" age ={14} isStudent={true}/>
<br />
<Student/>

<h2> Employee list </h2>
<Second  name="akshay" />
    </>

  )
}



export default App
