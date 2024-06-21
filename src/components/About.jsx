import React from "react";
import imgComputer from "../images/aboutme.jpeg";

function About() {
  return (
    <div id="about" className="container">
      <div className="card my-1">
        <div className="cover-container d-flex p-3 mx-auto my-auto flex-column">
          <div className="row align-items-center g-0 py-5">
            <div className="col-lg-6 order-lg-1 col-md-12 mb-4 mb-lg-0">
              <img
                src={imgComputer}
                className="d-block mx-lg-auto img-fluid rounded-1"
                alt="My Image"
                height={500}
                width={500}
                loading="eager"
              />
            </div>
            <div className="col-lg-6 order-lg-2 col-md-12">
              <h2>About Me</h2>
              <div className="fs-4 me-5 text-start">
                <hr />
                This is me Khushal Verma. Currently persuing B.Tech in Computer
                Science Engineering from Medi-Caps University. I am a passionate
                learner. Over this college journey, I've honed my skills in
                various technologies and tools. I thrive on creating seamless
                user experiences and developing efficient, scalable solutions.
                Outside of work, I enjoy cricket, beatbox and more. These
                activities not only provide a much-needed break from the screen
                but also inspire my creativity and fuel my passion for
                innovation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
