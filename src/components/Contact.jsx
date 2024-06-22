import React from "react";
import "../css/Contact.css";
import img from "../images/aboutme.jpeg";
function Contact() {
  return (
    <div id="contact" className="container">
      <div className="card my-1">
        <div className="cover-container h-100 w-100 d-flex p-3 flex-column">
          <h2>Contact Me</h2>
          <hr />
          <div className="row">
            <div class="col-12 col-md-6 mx-auto">
              <div class="card" id="contact-card">
                <div class="card-img text-center">
                  <img
                    id="contact-card-img"
                    src={img}
                    alt="This is contact image"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Phone
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
