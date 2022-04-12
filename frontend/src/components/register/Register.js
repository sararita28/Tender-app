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
  const [genderOfInterest, setGenderOfInterest] = useState([]);
  const [bio, setBio] = useState("");
  const [matches, setMatches] = useState([]);
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
        genderOfInterest,
        bio,
        matches,
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
          name="username"
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="name"
          placeholder="Please enter your first name"
          className="registerInput"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="age"
          placeholder="Please enter your age"
          className="registerInput"
          onChange={(e) => setAge(e.target.value)}
        />
        <div className="displayflex">
          <label className="gendLabel" style={{ color: "lightgray" }}>
            {" "}
            I am a:
          </label>
          <div id="genderContainer">
            <div>
              <label
                htmlFor="woman.gender"
                className="gendLabel womanGendRegister"
              >
                {" "}
                Woman
              </label>
              <input
                id="woman.gender"
                type="radio"
                name="gender"
                value="woman"
                className="registerInput"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="man.gender" className="gendLabel">
                Man
              </label>
              <input
                id="man.gender"
                type="radio"
                value="man"
                name="gender"
                className="registerInput"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
        </div>
        <input
          type="email"
          placeholder="Please enter your email"
          name="email"
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Please enter your password"
          name="password"
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="displayflex">
          <label className="gendLabel" style={{ color: "lightgray" }}>
            {" "}
            I'm interested in:
          </label>
          <div id="genderOfIntContainer">
            <div>
              <label htmlFor="woman.genderOfInterest" className="gendLabel">
                {" "}
                Women
              </label>
              <input
                id="woman.genderOfInterest"
                type="radio"
                name="genderOfInterest"
                value="woman"
                className="registerInput"
                onChange={(e) => setGenderOfInterest(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="man.genderOfInterest" className="gendLabel">
                Men
              </label>
              <input
                id="man.genderOfInterest"
                type="radio"
                name="genderOfInterest"
                value="man"
                className="registerInput"
                onChange={(e) => setGenderOfInterest(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="everyone.genderOfInterest" className="gendLabel">
                {" "}
                Everyone
              </label>
              <input
                id="everyone.genderOfInterest"
                type="radio"
                name="genderOfInterest"
                value="everyone"
                className="registerInput"
                onChange={(e) => setGenderOfInterest(e.target.value)}
              />
            </div>
          </div>
        </div>
        <input
          type="text"
          name="bio"
          placeholder="Please enter your bio"
          className="registerInput"
          onChange={(e) => setBio(e.target.value)}
          required={true}
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
