import "./index.css";
import { useState } from "react";
function Colorcomponent() {
  const [color, setcolor] = useState("");

  function Set(event) {
    setcolor(event.target.value);
  }
  return (
    <>
      <h1> Color Picker</h1>
      <div className="box" style={{ backgroundColor: color }}></div>
      <br />
      Color : <input type="color" onChange={Set} />
      <h2> Selected color :{color} </h2>
    </>
  );
}
export default Colorcomponent;
