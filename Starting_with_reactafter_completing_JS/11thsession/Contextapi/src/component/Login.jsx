import React from "react";
import { useContext, useState } from "react";
import Usercontext from "../context/UserContext";
import UserContextprovider from "../context/Usercontextprovider";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(Usercontext);
  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        placeholder="enter values"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      {"          "}
      <input
        type="text"
        placeholder="enter values"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handlesubmit}>Submit </button>
    </div>
  );
}

export default Login;
