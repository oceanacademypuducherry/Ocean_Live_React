import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { IoIosArrowBack } from "react-icons/io";
import "./Style/LoginOTPStyle.scss";
import OTPInput, { ResendOTP } from "otp-input-react";

export function LoginOTP() {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");

  function verifyOTP(e) {
    if (OTP.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(OTP)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;

          console.log(user, "// User signed in successfully.");
          navigate("/dashboard/mycourses");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log("invalid");
        });
    } else {
    }
  }

  return (
    <>
      <Appbar />
      <SideNavbar />

      <div className="loginOTP">
        <div className="loginOTP-Card-Top">
          <h1>Enter Your OTP</h1>
          {JSON.stringify(OTP)}
          <div className="loginOTP-Card-Top-Textfield">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
            />
          </div>
          <div
            className={
              OTP.length === 6 ? "loginOTP-Btn" : "loginOTP-Btn-Disable"
            }
            onClick={verifyOTP}
          >
            <p>Login</p>
          </div>
          <div
            className="loginOTP-Card-backBtn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoIosArrowBack className="loginOTP-Card-backBtn-icon" />
          </div>
        </div>
        <div className="loginOTP-Card-Bottom">
          <p>
            Or&nbsp;{" "}
            <Link
              to=""
              style={{ textDecoration: "none", color: "rgb(24,230,212)" }}
            >
              {" "}
              click here{" "}
            </Link>
            &nbsp; to visit website
          </p>
        </div>
      </div>
    </>
  );
}
