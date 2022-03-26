import "./Style/RegisterStyle.scss";
import { Appbar } from "../Appbar/Appbar";
import axios from "../../index";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function Register() {
  const param = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    occupation: "student",
    instOrOrg: "",
    state: "Pondicherry",
    country: "india",
    mobileNumber: param.mobileNumber,
    profilePicture: "",
    skils: [],
  });

  function onchangeHandler(e) {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  }

  async function submit() {
    axios
      .post("user/create", userData)
      .then((res) => {
        console.log(res.data);
        // navigate('/class_room')
        return res.data;
      })
      .then(async (res) => {
        await axios
          .post("user/login", { mobileNumber: res.mobileNumber })
          .then((res) => {
            console.log(res.data.token);
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard/mycourses");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

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
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={onchangeHandler}
              />
            </div>
            <div className="register-Card-Textfield">
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={onchangeHandler}
              />
            </div>
            <div className="register-Card-Textfield">
              <p>Gender</p>
              <select name="gender" onChange={onchangeHandler}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="register-Card-Textfield">
              <p>Date of Birth</p>
              <input
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={onchangeHandler}
              />
            </div>
            <div className="register-Card-Textfield">
              <p>E-mail Address</p>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={onchangeHandler}
              />
            </div>
            <div className="register-Card-Textfield">
              <p>Occupation</p>
              <select name="occupation" onChange={onchangeHandler}>
                <option value="student">Student</option>
                <option value="working">WorkingPro</option>
              </select>
            </div>
            <div className="register-Card-Textfield">
              <p>insOrOrg</p>
              <input
                type="text"
                name="instOrOrg"
                value={userData.instOrOrg}
                onChange={onchangeHandler}
              />
            </div>
            <div className="register-Card-Textfield">
              <p>State</p>
              <input
                type="text"
                name="state"
                value={userData.state}
                onChange={onchangeHandler}
              />
            </div>
            <div className="register-Card-Textfield">
              <p>Phone Number</p>
              <input
                readOnly={true}
                type="text"
                name="mobileNumber"
                value={userData.mobileNumber}
                onChange={onchangeHandler}
              />
            </div>
          </div>
          <br />
          <div className="register-Card-Btn" onClick={submit}>
            Submit
          </div>
        </div>
      </div>
    </>
  );
}
