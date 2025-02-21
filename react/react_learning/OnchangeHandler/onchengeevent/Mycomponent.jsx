import { useState } from "react";
function Mycomponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [comment, SetComment] = useState(" ");

  const [language, setLan] = useState(" ");

  function setLanguage(event) {
    setLan(event.target.value);
  }
  function HandlenameChange(event) {
    setName(event.target.value);
  }
  function handleAge(event) {
    setAge(event.target.value);
  }

  function Setcomment(event) {
    SetComment(event.target.value);
  }

  const [level, setLevel] = useState("");

  function changelevel(event) {
    setLevel(event.target.value);
  }
  return (
    <>
      <input
        type="text"
        maxLength={10}
        onChange={(e) => HandlenameChange(e)}
        name=""
        placeholder="Enter your name"
        id=""
      />
      <br />
      <input
        type="number"
        onChange={(e) => handleAge(e)}
        placeholder="Enter your age "
        id="age"
      />
      <br />
      <div>
        Language :
        <select onChange={setLanguage}>
          <option>Choose one </option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="JS">JS</option>
          <option value="C">C</option>
        </select>
        <br />
      </div>
      <br />
      <div className="level">
        <label>
          <input
            type="Radio"
            value="beginner"
            onChange={changelevel}
            checked={changelevel === "beginner"}
          />
          beginner
        </label>

        <label>
          <input
            type="Radio"
            value="intermediate"
            onChange={changelevel}
            checked={changelevel === "intermediate"}
          />
          intermediate
        </label>

        <label>
          <input
            type="Radio"
            value="Pro"
            onChange={changelevel}
            checked={changelevel === "Pro"}
          />
          pro
        </label>
      </div>
      <br />
      <textarea
        type="text"
        placeholder="enter your feedback"
        onChange={Setcomment}
      />
      <br />
      <h2> name : {name}</h2>
      <h2> Age: {age}</h2>
      <h2> Level : {level} </h2>
      <h2> Language :{language}</h2>
      feedback : <p>{comment}</p>
    </>
  );
}
export default Mycomponent;
