import React from "react";
import "./chat.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export default function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`chats/${name}`}>
      <div className="chat">
        <Avatar className="chatImg" alt={name} src={profilePic} />
        <div className="chatDetails">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chatTimestamp">{timestamp}</p>
      </div>
    </Link>
  );
}
