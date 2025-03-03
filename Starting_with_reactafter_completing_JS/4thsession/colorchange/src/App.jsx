import { useState } from "react";

function App() {
  const [color, changeColor] = useState("olive");

  return (
    <>
      <div
        className="w-full  h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0  px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-3xl">
          {["red", "cyan", "blue", "orange", "plum", "yellow", "green"].map(
            (col) => (
              <button
                key={col}
                onClick={() => changeColor(col)}
                className="outline-none px-4 py-2 text-white o
                font-semibold rounded-md shadow-md"
                style={{ backgroundColor: col }}
              >
                {col}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
