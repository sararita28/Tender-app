import React from "react";
import "./account.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { Context } from "../../Context/Context.js";
import { useContext } from "react";
import axios from "axios";

export default function Account() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`, { data: { userId: user._id } });
      window.location.replace("/auth");
    } catch (err) {}
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
          <img className="profilePicture" src={user.profilePic} />
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
        <button className="deleteAccount" onClick={handleDelete}>
          Delete Account
        </button>
      </div>
    </div>
  );
}
