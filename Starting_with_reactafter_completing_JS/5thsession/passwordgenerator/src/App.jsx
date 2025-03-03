import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isnum, setnumall] = useState(false);
  const [charallow, setcharallow] = useState(false);
  const [Password, setPassword] = useState(null);
  const passref = useRef(null);
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isnum) str += "0123456789";
    if (charallow) str += "!@#$%^&*(()-=+";

    for (let i = 0; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [length, isnum, charallow, setPassword]);

  useEffect(() => {
    passwordgenerator();
  }, [passwordgenerator]);

  const copypasswordtoclick = useCallback(() => {
    navigator.clipboard.writeText(Password);
    passref.current?.select(); // Selects text for better UX
  }, [Password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 bg-gray-300 text-black"
            placeholder="password"
            readOnly
            ref={passref}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-2"
            onClick={copypasswordtoclick}
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col text-sm gap-y-2 mt-4">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label> Length: {length} </label>
          </div>

          <div className="flex items-center gap-x-2">
            <label>Numbers</label>
            <input
              type="checkbox"
              checked={isnum}
              onChange={() => setnumall((prev) => !prev)}
            />

            <label>Special Characters</label>
            <input
              type="checkbox"
              checked={charallow}
              onChange={() => setcharallow((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  );
}

export default App;
