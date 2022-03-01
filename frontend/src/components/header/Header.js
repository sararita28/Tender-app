import React from "react";
import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import logolight from "../logo/logo_light.png";

export default function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon className="headerBack" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <AccountCircleIcon className="headerIcon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img className="headerLogo" src={logolight} alt="tender logo" />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon className="headerIcon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
