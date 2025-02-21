import { useState } from "react";

function Carcomponent() {
  const [cars, setcar] = useState(["BMW", "AUDI"]);

  function handleadd() {
    const newcar = document.getElementById("newinput").value;
    document.getElementById("newinput").value = "";

    if (newcar !== "") {
      console.log(newcar);
      setcar([...cars, newcar]);
    }
  }

  return (
    <>
      <h2>Cars list </h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>

      <input type="text" id="newinput" placeholder="add a car " />
      <button onClick={handleadd}>add Car </button>
    </>
  );
}
export default Carcomponent;
