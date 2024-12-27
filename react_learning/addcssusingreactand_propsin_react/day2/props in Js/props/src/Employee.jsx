// import React from 'react'
import Proptypes from 'prop-types';
function Employee  (props)  {
  return (
    <div className="employee">
        <p>Employee name : {props.name}</p>
        <p>Employee age : {props.age}</p>
        <p>Employeee : {props.isEmployee ?"yes" :"No"}</p>
    </div>
  )
}
Employee.Proptypes={
    name:Proptypes.string,
    age:Proptypes.number,
    isEmployee:Proptypes.bool
}
Employee.defaultProps={
    name:"Guest",
    age:25,
    isEmployee:true
}

export default Employee