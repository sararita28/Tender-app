import React from "react";
import Header from "../header/Header";
import SwipeButtons from "../swipeButtons/SwipeButtons";
import "./users.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../Context/Context.js";
import { useContext } from "react";

export default function Users() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);

  return (
    <div>
      <Header backButton="/" />
      <div className="userProfileContainer">
        <div className="userProfileBio">{user.bio}</div>
        <div className="userProfileNameAge">
          {user.name}, {user.age}
        </div>
        <SwipeButtons />
      </div>
    </div>
  );
}
