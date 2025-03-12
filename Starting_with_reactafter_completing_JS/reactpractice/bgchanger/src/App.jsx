import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="full"
        style={{
          backgroundColor: color,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          bottom: "20px",
        }}
      >
        <button
          className="redbtn"
          onClick={() => {
            setColor("red");
          }}
          style={{
            backgroundColor: "red",
            height: "30px",
            width: "auto",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          red
        </button>

        <button
          className="bluebtn"
          onClick={() => {
            setColor("blue");
          }}
          style={{
            backgroundColor: "blue",
            height: "30px",
            width: "auto",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          blue
        </button>

        <button
          className="greenbtn"
          onClick={() => {
            setColor("green");
          }}
          style={{
            backgroundColor: "green",
            height: "30px",
            width: "auto",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          green
        </button>

        <button
          className="plumbtn"
          onClick={() => {
            setColor("plum");
          }}
          style={{
            backgroundColor: "plum",
            height: "30px",
            width: "auto",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          plum
        </button>

        <button
          className="yellowbtn"
          onClick={() => {
            setColor("yellow");
          }}
          style={{
            backgroundColor: "yellow",
            height: "30px",
            width: "auto",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          yellow
        </button>
      </div>
    </>
  );
}

export default App;
