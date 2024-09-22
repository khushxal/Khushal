import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <div className="footer text-center">
      <div className="">
        <span className="fw-bold fs-3">"Thanks for scrolling"</span>
        <br />
        <span className="fst-italic">
          Built using React.js @{new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}

export default Footer;
