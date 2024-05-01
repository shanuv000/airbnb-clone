import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="footer">
      <p>© {currentYear} Airbnb, Inc. No rights reserved</p>
      <p>Privacy·Terms·Sitemap·Company details</p>
    </div>
  );
};
export default Footer;
