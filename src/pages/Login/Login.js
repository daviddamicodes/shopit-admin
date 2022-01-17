import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("null");
  const [password, setPassword] = useState("null");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="loginPage">
      <input
        className="loginInput"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="loginInput"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginButton" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
