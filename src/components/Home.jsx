import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import img from "../images/img_edit.png";
import "../css/Home.css";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
function Home() {
  const texts = ["a Coder.", "a Developer.", "an Engineer."];

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
      <div className="cover-container d-flex p-3 mx-auto my-auto flex-column">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5 ">
          <div className="col-lg-6 order-lg-1 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src={img}
              className=""
              style={{
                width: "70%",
                maxWidth: "600px",
              }} // Adjust maxWidth as needed
              alt="Bootstrap Themes"
              loading="eager"
            />
          </div>
          <div className="col-lg-6 order-lg-2 col-md-12 text-center">
            <div className="mb-2 fw-light">
              <h2>I'm</h2>
              <h1>Khushal Verma</h1>
            </div>
            <p className="lead">
              I am <span>{currentText}</span>
              <span className="blinking-cursor"></span>
            </p>
            <div className="row">
              <div className="col-12 col-md-6 mb-2 mb-md-0">
                <a href="Resume.pdf" download={true} className="w-100">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg w-100"
                  >
                    <LiaDownloadSolid className="me-1 fs-3" />
                    Hire Me
                  </button>
                </a>
              </div>
              <div className="col-12 col-md-6">
                <Link
                  to="contact"
                  smooth={true}
                  duration={200}
                  className="w-100"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg w-100"
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
