import React from "react";
import Link from "next/link";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link href="/items?filter=women">
        <button className="pure-button navBar-button">Women</button>
      </Link>
      <Link href="/items?filter=men">
        <button className="pure-button navBar-button">Men</button>
      </Link>
      <button className="pure-button navBar-button">Help</button>
      <button className="pure-button navBar-button">About Us</button>
    </div>
  );
};

export default NavBar;
