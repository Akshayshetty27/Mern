// import './props/src/index.css';
import Proptypes from 'prop-types';

function Student(props)
{
    return(
        <div className="Student">
        <p> Name : {props.name}</p>
        <p> Age : {props.age} </p>
        <p> Student :{props.isStudent ? "YES" : "NO"}
        </p>
        </div>
    )
    
}
Student.Proptypes={
    name: Proptypes.string,
    age:Proptypes.number,
    isStudent:Proptypes.bool,
  }

  Student.defaultProps={
    name: "Guest",
    age:0,
    isStudent:false
  }
export default Student;
