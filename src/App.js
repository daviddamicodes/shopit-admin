import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components.js/Topbar/Topbar";
import Sidebar from "./components.js/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
