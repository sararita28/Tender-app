import React from "react";
import "./account.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

export default function Account() {
  return (
    <div className="accountContainer">
      <Link to="/">
        <IconButton>
          <ArrowForwardIcon className="backToHomePage" fontSize="large" />
        </IconButton>
      </Link>
      <div className="editPhotoContainer">
        <img
          className=""
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <AddRoundedIcon className="editPhotoIcon" />
      </div>
      <h3>About</h3>
      <div className="divForBio">
        <label>Bio</label>
        <CreateRoundedIcon />
        <p style={{ border: "1px solid black" }}>
          This should be the person's bio
        </p>
      </div>
      <div className="divForGender">
        <label>Gender</label>
        <select>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div className="divForDOB">
        <label>DOB</label>
        <input type="date" id="birthday"></input>
      </div>
      <div>
        <h3>Interests/Preferences</h3>
        <div>
          <lavel>Gender</lavel>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <lavel>Age Range</lavel>
          The age range below should have 2 pointers
          <input type="range" min="18" max="100"></input>
          <output>Here you display the 2 values </output>
        </div>
        <button>Update Changes</button>
      </div>
      <button>Logout</button>
      <button>Delete Account</button>
    </div>
  );
}
