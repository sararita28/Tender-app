import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        name,
        age,
        gender,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter your username"
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Please enter your first name"
          className="registerInput"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Please enter your age"
          className="registerInput"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Please enter your gender"
          className="registerInput"
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Please enter your email"
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Please enter your password"
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Already Have an account? Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong. Please make sure all fields are filled and that
          both the username and email are unique.
        </span>
      )}
    </div>
  );
}
