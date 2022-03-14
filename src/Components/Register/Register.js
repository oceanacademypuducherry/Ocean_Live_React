import React from "react";
import "./Style/RegisterStyle.scss";
import { Appbar } from "../Appbar/Appbar";

export function Register() {
  return (
    <>
      <Appbar />
      <div className="register">
        <div className="register-Card">
          <h1>Register Your Account</h1>
          <div className="upload-Img-Row">
            <div className="register-Card-Circle"></div>
            <div className="upload-Btn">Upload</div>
          </div>
          <div className="register-Card-Row">
            <div className="register-Card-Textfield">
              <p>First Name</p>
              <input type="text" />
            </div>
            <div className="register-Card-Textfield">
              <p>Last Name</p>
              <input type="text" />
            </div>
            <div className="register-Card-Textfield">
              <p>Gender</p>
              <input type="text" />
            </div>
            <div className="register-Card-Textfield">
              <p>Date of Birth</p>
              <input type="date" />
            </div>
            <div className="register-Card-Textfield">
              <p>E-mail Address</p>
              <input type="text" />
            </div>
            <div className="register-Card-Textfield">
              <p>Company</p>
              <input type="text" />
            </div>
            <div className="register-Card-Textfield">
              <p>State</p>
              <input type="text" />
            </div>
            <div className="register-Card-Textfield">
              <p>Phone Number</p>
              <input type="text" />
            </div>
          </div>
          <br />
          <div className="register-Card-Btn">Submit</div>
        </div>
      </div>
    </>
  );
}
