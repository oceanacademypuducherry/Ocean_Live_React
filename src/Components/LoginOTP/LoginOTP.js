import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./Style/LoginOTPStyle.scss";

export function LoginOTP() {
  return (
    <>
      <Appbar />
      <SideNavbar />

      <div className="loginOTP">
        <div className="loginOTP-Card-Top">
          <h1>Enter Your OTP</h1>
          <div className="loginOTP-Card-Top-Textfield">
            <input type="text" value="" />
            <input type="text" value="" />
            <input type="text" value="" />
            <input type="text" value="" />
            <input type="text" value="" />
            <input type="text" value="" />
          </div>
          <div className="loginOTP-Card-Top-nextBtn">
            <p>Login</p>
          </div>
          <div className="loginOTP-Card-backBtn">
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
