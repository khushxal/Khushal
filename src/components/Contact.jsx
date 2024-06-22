import React, { useState } from "react";
import "../css/Contact.css";
import img from "../images/contactme.jpeg";
import { toast } from "react-toastify";
function Contact() {
  const [details, setDetails] = useState({});

  function handleChange(e) {
    try {
      const { name, value } = e.target;
      setDetails((prevDetail) => {
        return { ...prevDetail, [name]: value };
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    try {
      e.preventDefault();
      if (details) {
        toast.success("Your contact details reached to me.");
      } else {
        toast.error("Filling the form is mandatory.");
      }
      setDetails({
        email: "",
        phone: "",
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div id="contact" className="container card my-1">
      <div className="cover-container h-100 w-100 d-flex p-3 flex-column">
        <h2>Contact Me</h2>
        <hr />
        <div className="row mt-5">
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
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        onChange={handleChange}
                        value={details.email}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="exampleFormControlInput1"
                        onChange={handleChange}
                        value={details.phone}
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
  );
}

export default Contact;
