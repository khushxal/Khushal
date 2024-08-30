import React from "react";
import "../css/handle.css";
import LinkedInAnimation from "../images/LinkedInAnimation.gif";
import GithubAnimation from "../images/GithubAnimation.gif";
function SocialMediaHandle() {
  return (
    <div className="handle text-center">
      <a href="https://www.linkedin.com/in/khushal-verma">
        <img src={LinkedInAnimation} width={60} />
      </a>
      <a href="https://github.com/khushxal?tab=repositories">
        <img src={GithubAnimation} width={50} />
      </a>
    </div>
  );
}

export default SocialMediaHandle;
