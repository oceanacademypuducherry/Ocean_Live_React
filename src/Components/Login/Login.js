import React, { useState, useEffect } from "react";
import "./Style/LoginStyle.scss";
import "react-phone-number-input/style.css";
import { countryCode } from "../CountryCode/CountryCode";
import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { Link, useNavigate } from "react-router-dom";
// import { authentication } from "../Firebase/FirebaseConfig";
// import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

import axios from "../../index";

export function Login() {
  const navigate = useNavigate();
  const [phoneNumber, setphoneNumber] = useState("");

  // const generateRecaptcha = () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: (response) => {
  //         // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         // onSignInSubmit();
  //         console.log(response, "-----------responss");
  //       },
  //       "expired-callback": (response) => {
  //         // Response expired. Ask user to solve reCAPTCHA again.
  //         // ...
  //         console.log(response, "expired-callback-----");
  //       },
  //     },
  //     authentication
  //   );
  // };

  const requestOTP = async (e) => {
    // const code = document.querySelector(".country-Dropdown").value;
    // e.preventDefault();
    // console.log(document.querySelector(".country-Dropdown").value);
    // generateRecaptcha();
    // let appVerifier = window.recaptchaVerifier;
    // await signInWithPhoneNumber(
    //   authentication,
    //   `${code} ${phoneNumber}`,
    //   appVerifier
    // )
    //   .then((confirmationResult) => {
    //     window.confirmationResult = confirmationResult;
    //     navigate("/loginotp");
    //   })
    //   .catch((error) => {
    //     window.location.reload();
    //     console.log(window.recaptchaVerifier, "----window.recaptchaVerifier");
    //     console.log(error, "error by firebase");
    //     // const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
    //   });
  };

  async function login() {
    console.log(!isNaN(phoneNumber));
    if (!isNaN(phoneNumber) && phoneNumber.length >= 10) {
      await axios
        .post("user/login", { mobileNumber: phoneNumber })
        .then((res) => {
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard/mycourses");
        })
        .catch((error) => {
          console.log(error.message);
          // TODO:  user redux for pass the number
          navigate("/register/" + phoneNumber);
        });
    } else {
      alert("enter valid number");
    }
  }

  const onchangeInput = (e) => {
    console.log(e.target.value);
    setphoneNumber(e.target.value);
  };

  return (
    <>
      <Appbar />
      <SideNavbar />

      <div className="login">
        <div className="login-Card-Top">
          <h1>Welcome Back !</h1>
          {/* {JSON.stringify(document.querySelector("#countryCode").value)} */}
          <div className="login-Card-Top-Textfield">
            <div id="recaptcha-container"></div>

            <select name="cars" id="cars" className="country-Dropdown">
              {countryCode.map((data, index) => {
                return (
                  <option
                    key={index}
                    id="countryCode"
                    // defaultValue="+91 IN"
                    value={data.dial_code}
                  >
                    {`${data.dial_code}  ${data.code}`}
                  </option>
                );
              })}
            </select>
            <input
              type="number"
              placeholder="Mobile Number"
              value={phoneNumber}
              max={6}
              onChange={onchangeInput}
            />
          </div>
          <div className="login-Card-Top-nextBtn" onClick={login}>
            Next
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            quaerat autem labore nostrum reprehenderit voluptatibus explicabo .
          </p>
        </div>
        <div className="login-Card-Bottom">
          <p>
            Or&nbsp; <Link to=""> click here </Link>&nbsp; to visit website
          </p>
        </div>

        <div className="triangles">
          <div></div>
          <div></div>
        </div>
        <div className="circles">
          <div></div>
          <div></div>
        </div>
        <div className="rectangles">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
