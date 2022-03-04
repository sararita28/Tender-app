/* HERE THE PROBLEM THAT WE'RE EXPERIENCING IS THAT WE HAVE ASSIGNED BIOS, AGES ETC... TO CARDS, NOT TO USERS. */

import React from "react";
import "./account.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { Context } from "../../Context/Context.js";
import { useContext } from "react";
import Header from "../../components/header/Header";

export default function Account() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="accountContainer">
      <div className="accountTopBar">
        <Link to="/">
          <IconButton>
            <ArrowForwardIcon className="backToHomePage" fontSize="large" />
          </IconButton>
        </Link>
      </div>
      <div className="accountInfoWrapper">
        <div className="editPhotoContainer">
          <img
            className="profilePicture"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <IconButton>
            <AddRoundedIcon className="editPhotoIcon" fontSize="large" />
          </IconButton>
        </div>
        <h3 className="accountHeader">About</h3>
        <div className="divForBio">
          <label>Bio</label>
          <p className="accountBio" style={{ border: "1px solid black" }}>
            This should be the person's bio
            <IconButton>
              <CreateRoundedIcon />
            </IconButton>
          </p>
        </div>
        <div className="divForGender">
          <label>Gender</label>
          <select className="genderOptions">
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
          <h3 className="accountHeader">Interests/Preferences</h3>
          <div className="divForGenderPref">
            <lavel>Gender</lavel>
            <select className="genderOptions">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="divForAgePref">
            <lavel>Age Range</lavel>
            <input
              className="accountAgeRangeInput"
              type="range"
              min="18"
              max="100"
            ></input>
            <output className="ageRangePreference">
              Here you display the 2 values{" "}
            </output>
          </div>
        </div>
        <button className="updateAccount">Update Changes</button>
        <button className="accountLogout" onClick={handleLogout}>
          Logout
        </button>
        <button className="deleteAccount">Delete Account</button>
      </div>
    </div>
  );
}
