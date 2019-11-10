import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <img src="/logo.png" alt="logo" className="header-logo" />
      <form className="pure-forms header-search-form">
        <input
          type="text"
          placeholder="Search"
          className="header-search-form-input"
        />
      </form>
      <div className="header-icon">
        <FontAwesomeIcon className="header-icon" icon={faUser} size="lg" />
      </div>
      <div className="header-icon">
        <FontAwesomeIcon className="header-icon" icon={faCartPlus} size="lg" />
      </div>
    </section>
  );
};

export default Header;
