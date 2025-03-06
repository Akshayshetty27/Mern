import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [task, setTask] = useState(""); // State to store input

  // Add task function
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]); // Add new task
    setTask(""); // Clear input field
  };

  // Delete task function
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle completion status
  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    // <div className="app">
    //   <h2>To-Do List</h2>
    //   <input
    //     type="text"
    //     value={task}
    //     onChange={(e) => setTask(e.target.value)}
    //     placeholder="Enter a task..."
    //   />
    //   <button onClick={addTask}>Add</button>

    //   <ul>
    //     {tasks.map((t, index) => (
    //       <li key={index} className={t.completed ? "completed" : ""}>
    //         <span onClick={() => toggleTask(index)}>{t.text}</span>
    //         <button onClick={() => deleteTask(index)}>❌</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="app">
      <h2> to do list </h2>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="enter a task to add "
      />
      <button onClick={addTask}> add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(index)}>{t.text}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
