import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import "./Style/LoginOTPStyle.scss";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useLocation } from "react-router-dom";
import axios from "../../index";

export function LoginOTP() {
  const state = useLocation();
  const phoneNumber = state.state.phoneNumber;
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const [eyeVisible, setEyeVisible] = useState(true);

  function verifyOTP(e) {
    if (OTP.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(OTP)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user, "/User signed in successfully.");
          login();
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error, "-----error");
        });
    } else {
    }
  }

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

  return (
    <>
      <Appbar />
      <SideNavbar />

      <div className="loginOTP">
        <div className="loginOTP-Card-Top">
          <h1>
            Enter Your OTP{" "}
            {eyeVisible === true ? (
              <span>&#128578;</span>
            ) : (
              <span>&#128580;</span>
            )}{" "}
          </h1>

          <div className="loginOTP-Card-Top-Textfield">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure={eyeVisible}
            />
          </div>
          <div
            className="eye"
            onClick={() => {
              eyeVisible === true ? setEyeVisible(false) : setEyeVisible(true);
            }}
          >
            {eyeVisible === true ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
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
              click here
            </Link>
            &nbsp; to visit website
          </p>
        </div>
      </div>
    </>
  );
}
