import React, { useEffect } from "react";
import "./Style/FooterStyle.css";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaGooglePlusG } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export function Footer() {
  useEffect(() => {
    AOS.init({
      duration: "2s",
    });
  }, []);

  return (
    <>
      <div className="footer">
        <div className="maxWidth">
          <div className="mainCol">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="col"
            >
              <h1>Ocean Academy</h1>
              <p>
                Ocean was founded on the principle of building, and
                implementinggreat ideas that drive progress for the students ond
                clients
              </p>
              <input
                id="textfield"
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <div className="subBtn center">Subscribe</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="col"
            >
              <p>0413-2238675</p>
              <p>oceanacademy@gmail.com</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="col"
            >
              <p>CONTACT US</p>
              <p>SERVICES</p>
              <p>COURSES</p>
              <p>FAQ</p>
              <p>HELP</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              className="col"
            >
              <p>ABOUT US</p>
              <p>WORK WITH US</p>
              <p>PRIVATE POLICIES</p>
              <p>TERMS AND CONDITIONS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="iconbar">
        <FiFacebook className="icons" />
        <FiTwitter className="icons" />
        <FaGooglePlusG className="icons" />
        <FiLinkedin className="icons" />
      </div>
    </>
  );
}
