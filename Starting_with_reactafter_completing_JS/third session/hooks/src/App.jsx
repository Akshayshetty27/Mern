import "./App.css";
import { useState } from "react";
function App() {
  let [counter, setCount] = useState(5);
  let addvalue = () => {
    if (counter < 20) setCount(++counter);
  };
  let decrese = () => {
    if (counter > 0) setCount(--counter);
  };

  return (
    <>
      <h1> react </h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}> increase</button>
      <br />
      <button onClick={decrese}> decrease </button>
    </>
  );
}

export default App;
