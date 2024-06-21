import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <div className="footer text-center">
      <div className="">
        <span>@Copyright {new Date().getFullYear}</span>
      </div>
    </div>
  );
}

export default Footer;
