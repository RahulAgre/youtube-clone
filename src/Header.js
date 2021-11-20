import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ fill: "white" }} />
        <img
          className="header__logo"
          src="https://imgur.com/eJsGJLJ.png"
          alt=""
        />
      </div>

      <div className="header__input">
        <input type="text" />
        <SearchIcon style={{ fill: "white" }} />
      </div>

      <div className="header__icons">
        <VideoCallIcon style={{ fill: "white" }} />
        <AppsIcon style={{ fill: "white" }} />
        <NotificationsIcon style={{ fill: "white" }} />
        <Avatar
          alt="Rahul Agre"
          src="https://lh3.googleusercontent.com/ogw/ADea4I4scZvyaIHS_VXRO6dC2HRKhj-SRSdjeXHLhmo2d2g=s32-c-mo"
        />
      </div>
    </div>
  );
}

export default Header;
