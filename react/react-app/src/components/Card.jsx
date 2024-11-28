// import React from 'react'

// const Card = (props) => {
//     console.log(props)
//   return (
//    <>
   
//     <h1>
//         Hello {props.a}
//     </h1>
//     </>
//   )
// }

// export default Card
// import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>

        <h1>
            UserName  :{props.a}
        </h1>
        <h2> City :{props.city} ,Age :{props.age}</h2>
        <button>Add Friend </button>
    </div>
  )
}

export default Card