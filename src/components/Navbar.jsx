import React, { useState } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <button
            className="navbar-toggler bg-light"
            type="button"
            onClick={handleToggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMobile ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="home"
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  onClick={() => setIsMobile(false)}
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
                  onClick={() => setIsMobile(false)}
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
                  onClick={() => setIsMobile(false)}
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
                  onClick={() => setIsMobile(false)}
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
                  onClick={() => setIsMobile(false)}
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
