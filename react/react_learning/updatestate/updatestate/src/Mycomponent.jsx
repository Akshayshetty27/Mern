import { useState } from "react";
function Mycomponent() {
  const [fruit, setfruit] = useState(["Apple", "Banana"]);
  function handleadd() {
    const newfood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";

    if (newfood !== "") {
      console.log(newfood);
      setfruit([...fruit, newfood]);
    }
  }
  function remove(index) {
    setfruit(fruit.filter((_, i) => i !== index));
  }
  return (
    <>
      <h2> List of food</h2>
      <ul>
        {fruit.map((food, index) => (
          <li key={index} onClick={() => remove(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodinput" placeholder="add food" />
      <button onClick={handleadd}> add food </button>
    </>



  );
}
export default Mycomponent;
