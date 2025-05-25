import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import "../css/Contact.css";

import { toast } from "react-toastify";
function Contact() {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const [isLoading, setLoading] = useState(false);

  const form = useRef();

  function handleChange(e) {
    try {
      const { name, value } = e.target;
      setDetails({ ...details, [name]: value });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, phone, name } = details;

    // Basic validation
    if (!email.trim()) {
      return toast.error("Email cannot be blank");
    }

    if (!phone.trim() || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      return toast.error("Invalid Mobile Number");
    }

    if (!name.trim()) {
      return toast.error("Name cannot be blank");
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://learnmern.onrender.com/api/contact/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(details),
        }
      );

      if (response.ok) {
        toast.success("You will be receiving confirmation shortly.");
        setDetails({ email: "", name: "", phone: "" });
        setLoading(false);
      } else {
        toast.error("Some error has occurred.");
        setDetails({ email: "", name: "", phone: "" });
        setLoading(false);
      }
    } catch (err) {
      toast.error("Filling the form is mandatory.");
      setDetails({ email: "", name: "", phone: "" });
      setLoading(false);
    }
  }

  return !isLoading ? (
    <div id="contact" className="container hidden">
      <div className="cover-container h-100 d-flex p-3 flex-column">
        <h2>Contact Me</h2>
        <hr />
        <div className="row mt-2">
          <div className="col-lg-6 glass mx-auto p-3">
            <div className="card-body">
              <form ref={form} onSubmit={handleSubmit} autoComplete="off">
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
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="exampleFormControlInput1"
                      onChange={handleChange}
                      value={details.name}
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
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row mt-5">
        <div className="d-lg-flex justify-content-evenly">
          <div className="fs-3">
            📲 : <a href="tel:+918602352536">8602352536</a>
          </div>
          <div className="fs-3">
            📩 :{" "}
            <a href="mailto:vkkhushal18@gmail.com?subject=Interested%20in%20Your%20Profile&body=Hello%20[Your%20Name],%0D%0A%0D%0AI%20am%20interested%20in%20your%20profile%20and%20would%20like%20to%20know%20more%20about%20your%20experience%20and%20projects.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20discuss%20further.%0D%0A%0D%0AThank%20you,%0D%0A[Visitor's%20Name]">
              vkkhushal18@gmail.com
            </a>
          </div>
        </div>
      </div> */}
    </div>
  ) : (
    <div className="text-center py-5">
      <div className="spinner-border text-grey" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Submitting your details...</p>
    </div>
  );
}

export default Contact;
