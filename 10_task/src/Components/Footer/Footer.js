import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Joseph Boadi | All rights reserved
            | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
