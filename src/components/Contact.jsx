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
      if (details.email && details.phone) {
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
    <div id="contact" className="container">
      <div className="card my-1">
        <div className="cover-container h-100 w-100 d-flex p-3 flex-column">
          <h2>Contact Me</h2>
          <hr />
          <div className="row mt-2">
            <div className="col-12 col-md-6 mx-auto">
              <div className="card" id="contact-card">
                <div className="card-img text-center">
                  <img
                    id="contact-card-img"
                    src={img}
                    alt="This is contact image"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
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
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
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
          <div className="my-auto">
            <span className="fs-3 text-danger">
              Note <br />
            </span>
            I haven't handled the form data till, but i will if you give me a
            chance to showcase my skill. Contact Me.
            <div className="fs-2">
              📲 : <a href="tel:+918602352536">8602352536</a>
            </div>
            <div className="fs-2">
              📩 :{" "}
              <a href="mailto:vkkhushal18@gmail.com?subject=Interested%20in%20Your%20Profile&body=Hello%20[Your%20Name],%0D%0A%0D%0AI%20am%20interested%20in%20your%20profile%20and%20would%20like%20to%20know%20more%20about%20your%20experience%20and%20projects.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20discuss%20further.%0D%0A%0D%0AThank%20you,%0D%0A[Visitor's%20Name]">
                vkkhushal18@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
