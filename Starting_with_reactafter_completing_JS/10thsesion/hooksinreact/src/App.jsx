import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(7);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) characters += "1234567890";
    if (charAllowed) characters += "`~!@#$%^&*()_-+=|}";

    let pass = "";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center text-white mb-4">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 bg-gray-700 text-orange-500">
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            className="outline-none w-full py-2 px-3 text-black"
            placeholder="Generated password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-blue-500 text-white px-4 py-2"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex items-center mb-2">
          <input
            className="cursor-pointer"
            min={7}
            max={100}
            type="range"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
          />
          <label className="ml-2">Length: {length}</label>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label className="ml-2">Special Characters</label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className="ml-2">Numbers</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
