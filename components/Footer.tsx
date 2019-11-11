import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" onClick={() => window.scrollTo(0, 0)}>
      <button className="pure-button footer-button">Back to top</button>
    </div>
  );
};

export default Footer;
