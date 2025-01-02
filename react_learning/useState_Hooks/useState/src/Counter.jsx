import { useState } from "react";

function Counter() {
  const [count, setState] = useState(0);

  function Increase() {
    setState(count + 1);
  }
  function decrease() {
    setState(count - 1);
  }
  const name = ["Avin", "sherlock", "lawSubhash"];
  const [change, setName] = useState(name[0]);
  function ChangeName() {
    let n = Math.floor(Math.random(0, 3) * (3 - 0));
    setName(name[n]);
    console.log(n);
  }

  const [va, setStatus] = useState(false);
  function togglestate() {

    setStatus(!va);
  }
  


  return (
    <>
      <h2> my Name is : {change} </h2>
      <button onClick={ChangeName}> change name </button>
      <h2> isEmployed :{va ? "Yes" : "No"}</h2>
      <button onClick={togglestate}> toggelestate</button>
      <h1> {count} </h1>
      <button onClick={Increase}> increase </button>
      <button onClick={decrease}> decrease </button>
    </>
  );
}
export default Counter;
