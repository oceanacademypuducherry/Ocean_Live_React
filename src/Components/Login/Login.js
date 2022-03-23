import React, { useState } from "react";
import "./Style/LoginStyle.scss";
import "react-phone-number-input/style.css";
import { countryCode } from "../CountryCode/CountryCode";
import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { Link, useNavigate } from "react-router-dom";
import { authentication } from "../Firebase/FirebaseConfig";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

export function Login() {
  const navigate = useNavigate();
  const defaultCountryCode = "+91";
  const [phoneNumber, setphoneNumber] = useState();
  const [code, setCode] = useState();

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      authentication
    );
  };

  const requestOTP = async (e) => {
    const code = document.querySelector(".country-Dropdown").value;
    e.preventDefault();
    console.log(document.querySelector(".country-Dropdown").value);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;

    await signInWithPhoneNumber(
      authentication,
      `${code}${phoneNumber}`,
      appVerifier
    )
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        navigate("/loginotp");
      })
      .catch((error) => {
        console.log(error, "error by firebase");
      });
  };

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
            <select name="cars" id="cars" className="country-Dropdown">
              {countryCode.map((data, index) => {
                return (
                  <option
                    key={index}
                    value={data.dial_code}
                    onChange={setCode}
                    id="countryCode"
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
        <div id="recaptcha-container"></div>
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
