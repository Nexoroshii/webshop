import React from "react";

import "./header.css";
import logo from "./../../img/icons/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="logo"></img>
            <span>Fashion</span>
          </div>
          <div className="header__nav">NAV</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
