import React from "react";
import "./swipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BoltIcon from "@mui/icons-material/Bolt";
import IconButton from "@material-ui/core/IconButton";

export default function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeRepeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeLeft">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeStar">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeRight">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeLightning">
        <BoltIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
