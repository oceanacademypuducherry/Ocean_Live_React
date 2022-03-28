import React, { useState, useEffect } from "react";
import "./Style/LoginStyle.scss";
import "react-phone-number-input/style.css";
import { countryCode } from "../CountryCode/CountryCode";
import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { Link, useNavigate } from "react-router-dom";
import { authentication } from "../Firebase/FirebaseConfig";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
// import axios from "../../index";

export function Login() {
  const navigate = useNavigate();
  const [phoneNumber, setphoneNumber] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "visible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log(response, "-----------responss");
        },
        "expired-callback": (response) => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
          console.log(response, "expired-callback-----");
        },
      },
      authentication
    );
  };

  const requestOTP = async (e) => {
    const code = document.querySelector(".country-Dropdown").value;
    console.log(code, "code");
    e.preventDefault();
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    await signInWithPhoneNumber(
      authentication,
      `${code} ${phoneNumber}`,
      appVerifier
    )
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        navigate("/loginotp", { state: { phoneNumber: phoneNumber } });
      })
      .catch((error) => {
        // window.location.reload();
        console.log(window.recaptchaVerifier, "----window.recaptchaVerifier");
        console.log(error, "error by firebase");
      });
  };

  const onchangeInput = (e) => {
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
            <select name="cars" id="cars" className="country-Dropdown">
              <option
                id="countryCode"
                // defaultValue="+91 IN"
                value="+91"
              >
                +91 IN
              </option>
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
          <div className="login-Card-Top-nextBtn" onClick={requestOTP}>
            Next
          </div>
          <div id="recaptcha-container"></div>
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
