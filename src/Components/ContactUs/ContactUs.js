import { useState, useEffect } from "react";
import "./Style/ContactUsStyle.scss";
import cryptoJS from "crypto-js";
import axios from "axios";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import { Titlebar } from "../Titlebar/Titlebar";
import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { Footer } from "../Footer/Footer";

export function ContactUs() {
  const [robot, setRobot] = useState({
    randomA: 0,
    randomB: 0,
    sumValue: "",
  });

  useEffect(() => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setRobot({ ...robot, randomA: a, randomB: b });
  }, []);

  const [form, setform] = useState({
    enquiryFor: "",
    fullName: "",
    mobileNumber: "",
    email: "",
    query: "",
  });

  const submitForm = async () => {
    if (
      form.enquiryFor !== "" &&
      form.fullName !== "" &&
      form.mobileNumber !== "" &&
      form.email !== "" &&
      form.query !== ""
    ) {
      if (parseInt(robot.sumValue) === robot.randomA + robot.randomB) {
        ///Encryption with math secret key///
        var data = cryptoJS.AES.encrypt(
          JSON.stringify(form),
          "#####"
        ).toString();

        await axios
          .post("http://localhost:8000/api/sendemail", { data })
          .then((res) => {
            // console.log(res);
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });

        //reset
        reset();
      } else {
        console.log("wrong calculation");
        setRobot({
          randomA: Math.floor(Math.random() * 10),
          randomB: Math.floor(Math.random() * 10),
          sumValue: "",
        });
      }
    } else {
      console.log("fill values");
    }
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "sum" && value.length < 3) {
      setRobot({ ...robot, sumValue: e.target.value });
      console.log(value);
    } else {
      setform({ ...form, [name]: value });
    }
  };

  const reset = () => {
    setform({
      email: "",
      enquiryFor: "",
      fullName: "",
      mobileNumber: "",
      query: "",
    });
    setRobot({
      randomA: Math.floor(Math.random() * 10),
      randomB: Math.floor(Math.random() * 10),
      sumValue: "",
    });
  };

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
              <input
                type="text"
                placeholder="Enter your Enquiry"
                name="enquiryFor"
                onChange={onChange}
                value={form.enquiryFor}
              />
            </div>

            <div className="textfield">
              <p>
                Full Name <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                name="fullName"
                onChange={onChange}
                value={form.fullName}
              />
            </div>

            <div className="textfield">
              <p>
                Mobile Number <span>*</span>
              </p>
              <input
                type="number"
                max="0"
                min="0"
                placeholder="Enter Your Phone Number"
                name="mobileNumber"
                onChange={onChange}
                value={form.mobileNumber}
              />
            </div>

            <div className="textfield">
              <p>
                E-mail <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter Your E-mail"
                name="email"
                onChange={onChange}
                value={form.email}
              />
            </div>

            <div className="textfield">
              <p>
                Query <span>*</span>
              </p>
              <input
                type="text"
                placeholder="Enter Your Query"
                name="query"
                onChange={onChange}
                value={form.query}
              />
            </div>

            <div className="card">
              <p>I'm not Robot</p>

              <div className="calc">
                <div className="box1">{robot.randomA}</div>
                <p>+</p>
                <div className="box2">{robot.randomB}</div>
                <p>=</p>
                <input
                  type="number"
                  name="sum"
                  value={robot.sumValue}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-btn" onClick={submitForm}>
              Submit
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
