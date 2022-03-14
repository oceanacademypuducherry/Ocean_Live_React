import React from "react";
import "./Style/ContactUsStyle.scss";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import { Titlebar } from "../Titlebar/Titlebar";
import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { Footer } from "../Footer/Footer";

export function ContactUs() {
  return (
    <>
      <Appbar />
      <SideNavbar />
      <Titlebar title="CONTACT US" />
      <div className="contactUs" onClick={closeSideNavbar}>
        <div>
          <div className="div-left">
            <p>
              <span>
                <BsPhone className="contactUs-icons" />
              </span>
              0413-2240580
            </p>
            <p>
              <span>
                <MdOutlineMail className="contactUs-icons" />
              </span>
              info@oceanacademy.in
            </p>
            <p>
              <span>
                <GoLocation className="contactUs-icons" />
              </span>
              No. 10, 2nd Floor, 45 Feet Road, Vengateswara Nagar, Near HDFC
              Bank, Saram, Puducherry-605013.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62456.736835733216!2d79.8133805!3d11.936647399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1642996147156!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className="div-right">
            <h3>Contact Form</h3>
            <p>
              For technical suggestions, more information on training and IT
              consulting, or business-related enquiries, please connect with us
              by filling the form presented below.
            </p>
            <div className="textfield">
              <p>
                This Enquiry is for <span>*</span>
              </p>
              <input type="text" placeholder="Enter your Enquiry" />
            </div>

            <div className="textfield">
              <p>
                Full Name <span>*</span>
              </p>
              <input type="text" placeholder="Enter Your Full Name" />
            </div>

            <div className="textfield">
              <p>
                Phone Number <span>*</span>
              </p>
              <input
                type="number"
                max="0"
                min="0"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div className="textfield">
              <p>
                E-mail <span>*</span>
              </p>
              <input type="text" placeholder="Enter Your E-mail" />
            </div>

            <div className="textfield">
              <p>
                Query <span>*</span>
              </p>
              <input type="text" placeholder="Enter Your Query" />
            </div>

            <div className="card">
              <p>I'm not Robot</p>

              <div className="calc">
                <div className="box1">1</div>
                <p>+</p>
                <div className="box2">2</div>
                <p>=</p>
                <input type="number" />
              </div>
            </div>

            <div className="form-btn">Submit</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
