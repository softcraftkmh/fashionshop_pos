import React from "react";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <button className="pure-button navBar-button">Women</button>
      <button className="pure-button navBar-button">Men</button>
      <button className="pure-button navBar-button">Help</button>
      <button className="pure-button navBar-button">About Us</button>
    </div>
  );
};

export default NavBar;
