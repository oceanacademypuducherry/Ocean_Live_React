import React, { useState, useEffect } from "react";
import axios from "../../../index";
import "./Style/EditProfile.scss";
import { LoggedInAppbar } from "../LoggedInAppbar/LoggedInAppbar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function EditProfile() {
  const navigate = useNavigate();
  const [isMale, setIsMale] = useState(true);
  const [purchaseList, setPurchaseList] = useState([]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    occupation: "",
    instOrOrg: "",
    state: "",
    country: "",
    mobileNumber: "",
    profilePicture: "",
    skils: "",
  });
  function onchangeHandler(e) {
    const { name, value } = e.target;
    if (name === "dateOfBirth") {
      console.log(value, typeof value);
      let date = new Date();
      console.log(date.toUTCString());
      setUserData({ ...userData, [name]: value });
    } else {
      setUserData({ ...userData, [name]: value });
      setIsMale(userData.gender === "male");
    }
  }
  function submit() {
    let dateOfBirth = new Date(userData.dateOfBirth).toISOString();
    let userInfo = userData;
    userInfo.dateOfBirth = dateOfBirth;
    axios
      .patch("user/", userInfo)
      .then((res) => {
        console.log(res.data);
        navigate(-1);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function getUserData(sessionUser) {
    axios
      .post("user/", { token: sessionUser })
      .then((res) => {
        let resData = res.data;
        resData["token"] = sessionUser;
        let date = new Date(res.data.dateOfBirth);
        resData.dateOfBirth = `${date.getFullYear()}-${
          date.getMonth() + 1 > 9
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)
        }-${date.getDate() > 9 ? date.getDate() : "0" + date.getDate()}`;

        setUserData(resData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function getEnrolledList(sessionUser) {
    axios
      .post("purchased/", { token: sessionUser })
      .then((res) => {
        setPurchaseList(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  useEffect(() => {
    let sessionUser = localStorage.getItem("token");
    getUserData(sessionUser);
    getEnrolledList(sessionUser);
  }, []);
  return (
    <>
      <LoggedInAppbar />
      <div className="editProfile">
        <div className="editProfile-Back-Btn">
          <IoIosArrowRoundBack className="notification-back-icon" /> Edit
          Profile
        </div>

        <div className="editProfile-content">
          <div className="editProfile-division1">
            <div className="profile-circle"></div>

            <div className="editProfile-card">
              <p>Courses Enrolled</p>
              <h1>{purchaseList.length}</h1>
            </div>

            <div className="editProfile-card">
              <p>Courses Completed</p>
              <h1>0</h1>
            </div>
          </div>
          <br /> <br /> <br />
          <div className="editProfile-division2">
            <div className="editProfile-textField">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={onchangeHandler}
                value={userData.firstName}
              />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={onchangeHandler}
                value={userData.lastName}
              />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Gender</label>
              <select name="gender" onChange={onchangeHandler}>
                <option selected={userData.gender === "male"} value="male">
                  Male
                </option>
                <option selected={userData.gender === "female"} value="female">
                  Female
                </option>
              </select>
            </div>

            <div className="editProfile-textField">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                onChange={onchangeHandler}
                value={userData.dateOfBirth}
              />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">E-mail Address</label>
              <input
                type="email"
                name="email"
                onChange={onchangeHandler}
                value={userData.email}
              />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Occupation</label>
              <select name="occupation" onChange={onchangeHandler}>
                <option
                  value="student"
                  selected={userData.occupation === "student"}
                >
                  Student
                </option>
                <option
                  value="working"
                  selected={userData.occupation === "working"}
                >
                  WorkingProffetion
                </option>
              </select>
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">InstOrOrg</label>
              <input
                type="text"
                name="instOrOrg"
                value={userData.instOrOrg}
                onChange={onchangeHandler}
              />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Country</label>
              <input
                type="text"
                name="country"
                value={userData.country}
                onChange={onchangeHandler}
              />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">State</label>
              <input
                type="text"
                name="state"
                value={userData.state}
                onChange={onchangeHandler}
              />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Phone Number</label>
              <input
                readOnly={true}
                type="text"
                name="mobileNumber"
                value={userData.mobileNumber}
                onChange={onchangeHandler}
              />
            </div>
          </div>
          <br /> <br />
          <div className="editProfile-Update-Btn" onClick={submit}>
            Update
          </div>
        </div>
      </div>
    </>
  );
}
