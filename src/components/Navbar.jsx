import React, { useState } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMenu = () => {
    setIsMobile(!isMobile); // Toggle mobile menu state
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button
            className="navbar-toggler bg-opacity-25"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  onClick={() => setIsMobile(false)} // Close menu on link click
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  onClick={() => setIsMobile(false)} // Close menu on link click
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  onClick={() => setIsMobile(false)} // Close menu on link click
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  onClick={() => setIsMobile(false)} // Close menu on link click
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  onClick={() => setIsMobile(false)} // Close menu on link click
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
