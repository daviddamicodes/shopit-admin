import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components.js/Topbar/Topbar";
import Sidebar from "./components.js/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
