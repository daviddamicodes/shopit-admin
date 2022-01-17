import "./App.css";
import Topbar from "./components.js/Topbar/Topbar";
import Sidebar from "./components.js/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  console.log(user);
  return (
    <div className="App">
      {admin && <Topbar />}
      <div className="container">
        {admin && <Sidebar />}
        <Routes>
          <Route path="/" element={admin && <Home />} />
          <Route path="/users" element={admin && <UserList />} />
          <Route path="/user/:userId" element={admin && <User />} />
          <Route path="/newUser" element={admin && <NewUser />} />
          <Route path="/products" element={admin && <ProductList />} />
          <Route path="/product/:productId" element={admin && <Product />} />
          <Route path="/newProduct" element={admin && <NewProduct />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
