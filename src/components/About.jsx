import React from "react";
import imgComputer from "../images/aboutme.jpeg";
function About() {
  return (
    <div id="about" className="container">
      <div className="cover-container about-cover-container d-flex p-2 flex-column">
        <div className="row align-items-center g-0 py-5">
          <div className="col-lg-4 order-lg-1 col-12 mb-4 mb-lg-0 text-center">
            <img
              src={imgComputer}
              className="img-fluid rounded-1 w-75"
              alt="My Image"
            />
          </div>
          <div className="col-lg-7 order-lg-2 col-12 text-center text-lg-start">
            <h2>About Me</h2>
            <div className="fs-4" style={{ textAlign: "justify" }}>
              <hr />
              {/* This is me Khushal Verma. Currently pursuing B.Tech in Computer
              Science Engineering from Medi-Caps University. I am a passionate
              learner. Over this college journey, I've honed my skills in
              various technologies and tools. I thrive on creating seamless user
              experiences and developing efficient, scalable solutions. Outside
              of work, I enjoy cricket, beatbox and more. These activities not
              only provide a much-needed break from the screen but also inspire
              my creativity and fuel my passion for innovation. */}
              I'm Khushal Verma, a <strong>B.Tech</strong> student in{" "}
              <strong>Computer Science Engineering</strong> at{" "}
              <strong>Medi-Caps University</strong>. As a dedicated and
              passionate learner, I have sharpened my skills across a broad
              range of technologies and tools throughout my college journey. I
              excel in crafting seamless user experiences and developing
              scalable, high-performance solutions. Outside of my academic and
              technical endeavors, I immerse myself in cricket, beatboxing(Boots
              and Cats), and other pursuits that reinvigorate my creativity and
              fuel my relentless passion for innovation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
