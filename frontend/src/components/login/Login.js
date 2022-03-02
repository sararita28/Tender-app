import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter your username"
          className="loginInput"
          ref={userRef}
        />
        <input
          type="password"
          placeholder="Please enter your password"
          className="loginInput"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Don't have an account? Register
        </Link>
      </button>
    </div>
  );
}
