import React from "react";
import "./auth.css";
import bigLogo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginContainer">
      <img src={bigLogo} className="loginBackground" />
      <div className="loginPageBtns">
        <Link to="/login">
          <button className="loginBtn">LOG IN</button>
        </Link>
        <Link to="/register">
          <button className="signupBtn">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
}
