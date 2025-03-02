import "./App.css";
import Card from "../../hooks/Card";
import Newcomp from "./Newcomp";
function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl ">tailwind test</h1>
      <Card />
      <Newcomp username="shetty" password="Paswoordat1234" />
    </>
  );
}

export default App;
