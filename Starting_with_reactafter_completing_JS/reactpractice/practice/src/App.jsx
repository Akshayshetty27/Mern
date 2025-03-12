import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [task, setTask] = useState("");
  const [work, addwork] = useState([]);
  // const [completed, setwork] = useState(null);

  const handlesubmit = () => {
    if (task.trim() === "") return;

    addwork([...work, task]);
    setTask("");
  };

  const handleRemove = (index) => {
    const updatedWork = work.filter((_, i) => i !== index);
    addwork(updatedWork); // Corrected function name
  };

  return (
    <>
      <Header />
      <ul>
        {work.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handlesubmit}>Add</button>
    </>
  );
}

export default App;
