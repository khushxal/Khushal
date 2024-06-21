import React from "react";
import img from "../images/img_edit.png";
import "../css/Home.css";
function Home() {
  return (
    <div id="home" className="container">
      <div className="card my-1">
        <div className="cover-container d-flex p-3 mx-auto my-auto flex-column">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            {/* <div className="col-10 col-sm-8 col-lg-6"> */}
            <div className="col-lg-6 order-lg-1 col-md-12 mb-4 mb-lg-0 ">
              <img
                src={img}
                className="d-block mx-lg-auto img-fluid rounded-circle"
                alt="Bootstrap Themes"
                loading="eager"
              />
            </div>
            {/* <div className="col-lg-6"> */}
            <div className="col-lg-6 order-lg-2 col-md-12">
              <h1 class="display-5 mb-2">
                I'm <br />
                Khushal Verma
              </h1>
              <p className="lead">I am a Coder, Developer and Engineer</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4 me-md-2"
                >
                  Hire Me
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
