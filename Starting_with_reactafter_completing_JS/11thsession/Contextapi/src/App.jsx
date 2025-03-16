import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextprovider from "./context/Usercontextprovider";

function App() {
  return (
    <>
      <UserContextprovider>
        <h1> Context Api </h1>
        <Login />
        <Profile />
      </UserContextprovider>
    </>
  );
}

export default App;
