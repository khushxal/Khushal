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
    <div id="home" className="container">
      <div className="card my-1">
        <div className="cover-container d-flex p-3 mx-auto my-auto flex-column">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6 order-lg-1 col-md-12 mb-4 mb-lg-0 ">
              <img
                src={img}
                className="d-block mx-lg-auto img-fluid rounded-5"
                alt="Bootstrap Themes"
                loading="eager"
              />
            </div>
            <div className="col-lg-6 order-lg-2 col-md-12">
              <h1 className="display-5 mb-2">
                I'm <br />
                Khushal Verma
              </h1>
              <p className="lead">
                I am <span>{currentText} </span>
                <span className="blinking-cursor"></span>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="CVKhushal.pdf" download={true}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4 me-md-2"
                  >
                    <LiaDownloadSolid className="me-1 fs-3" />
                    Hire Me
                  </button>
                </a>
                <Link to="contact" smooth={true} duration={200}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
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
