import React from "react";
import "../css/handle.css";
import LinkedInAnimation from "../images/LinkedInAnimation.gif";
import GithubAnimation from "../images/GithubAnimation.gif";
import { isMobile } from "react-device-detect";
function SocialMediaHandle() {
  return (
    <div className={isMobile ? "mobile" : "handle text-center"}>
      <a href="https://www.linkedin.com/in/khushal-verma">
        <img src={LinkedInAnimation} width={100} />
      </a>
      <a href="https://github.com/khushxal?tab=repositories">
        <img src={GithubAnimation} width={50} />
      </a>
    </div>
  );
}

export default SocialMediaHandle;
