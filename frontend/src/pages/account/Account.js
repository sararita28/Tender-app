import React from "react";
import "./account.css";
import { useState } from "react";
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

  const [profilePic, setProfilePic] = useState("");

  return (
    <div className="accountContainer">
      <div className="accountTopBar">
        <Link to="/">
          <IconButton>
            <ArrowForwardIcon className="backToHomePage" fontSize="large" />
          </IconButton>
        </Link>
      </div>
      <div className="onboarding">
        <h2 className="settingsHeader" id="accountheader">
          {user.name}'s Account Settings{" "}
        </h2>
        <form id="account-form">
          <section>
            <label className="settinsLabelTitle">Age</label>
            <input id="age" type="number" placeholder={user.age} />
            <label className="settinsLabelTitle">Gender</label>
            <input id="gender" type="text" placeholder={user.gender} />
            <label className="settinsLabelTitle">Password</label>
            <input id="password" type="password" placeholder={user.password} />
            <label className="settinsLabelTitle">Email</label>
            <input id="email" type="text" placeholder={user.email} />
            <label className="settinsLabelTitle">Bio</label>
            <input id="about" type="text" placeholder={user.bio} />
            <h2 className="settingsHeader">Interests/Preferences</h2>
            <label className="settinsLabelTitle">I'm interested in:</label>
            <div className="multiple-input-container">
              <input id="woman-gender-identity" type="radio" checked={false} />
              <label>Women</label>
              <input id="man-gender-identity" type="radio" checked={false} />
              <label>Men</label>
              <input id="more-gender-identity" type="radio" checked={false} />
              <label>Everyone</label>
            </div>
            <input type="submit" value="Update" />
            <button id="settingsLogoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </section>

          <section>
            <label className="settinsLabelTitle">Profile Picture</label>
            <IconButton>
              <AddRoundedIcon className="editPhotoIcon" fontSize="large" />
            </IconButton>{" "}
            <div className="photo-container">
              <img
                src={
                  user.profilePic ||
                  "https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png"
                }
                onChange={(e) => setProfilePic(e.target.value)}
              />
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
