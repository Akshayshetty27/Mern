import "./App.css";
import List from "./List.jsx";
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 150 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 170 },
    { id: 4, name: "pineapple", calories: 50 },
  ];



  return (<List items={fruits} category="Fruits" />

  );
}

export default App;
