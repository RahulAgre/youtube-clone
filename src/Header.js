import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div>
      <h1>This is a Header</h1>
      <MenuIcon />
      <img
        className="header__logo"
        src="https://imgur.com/J1LeNZR.png"
        alt=""
      />
      <input type="text" />
      <SearchIcon />
    </div>
  );
}

export default Header;
