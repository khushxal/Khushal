import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import img from "../images/img_edit.png";
import "../css/Home.css";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { isMobile } from "react-device-detect";
function Home() {
  const texts = ["''Coder''", "''Developer''", "''Engineer''"];

  const [currentText, setCurrentText] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);

  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[currentIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex, texts]);

  return (
    <div id="home" className="container hidden">
      <div className=" cover-container p-3 flex-column">
        <div className="row mt-1  flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <div className="col-lg-6 col-md-12 mb-4 d-flex justify-content-center justify-content-lg-end order-lg-1">
            <img
              src={img}
              className={`img-fluid ${isMobile && "rounded-circle"}`}
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 col-md-12 text-center order-lg-2">
            <div className="mb-2">
              <p className="lead fs-1">I'm</p>
              <h1 className="display-2 fw-bold">
                <strong> Khushal Verma</strong>
              </h1>
            </div>
            <p className="lead fs-1">
              I am <i>{currentText}</i>
              <span className="blinking-cursor"></span>
            </p>
            <div className="row">
              <div className="col-12 col-md-6 mb-2 mb-md-0">
                <a href="Resume.pdf" target="_blank">
                  <button type="button" className="btn btn-lg w-100">
                    <LiaDownloadSolid className="me-1 fs-3" />
                    Hire Me
                  </button>
                </a>
              </div>
              <div className="col-12 col-md-6">
                <Link to="contact" smooth duration={200} className="w-100">
                  <button
                    type="button"
                    className="btn btn-lg w-100 active d-flex justify-content-center align-items-center"
                  >
                    <MdOutlineConnectWithoutContact className="me-1 fs-3" />
                    Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
