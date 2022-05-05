import React, { useState, useEffect } from "react";
import axios from "../../../index";
import "./Style/EditProfile.scss";
import { LoggedInAppbar } from "../LoggedInAppbar/LoggedInAppbar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import firebaseStorage from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function EditProfile() {
  const navigate = useNavigate();
  const [isMale, setIsMale] = useState(true);
  const [purchaseList, setPurchaseList] = useState([]);
  const [uploadPercent, setUploadPercent] = useState("Upload");
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
    profilePicture:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    skills: "",
  });
  function onchangeHandler(e) {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setUserData({ ...userData, profilePicture: "" });
      uploadImage(files[0]);
    } else if (name === "dateOfBirth") {
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
  function fileUpload() {
    const fileInp = document.querySelector("#profile-inp");
    fileInp.type = "file";
    fileInp.accept = "image/*";
    fileInp.style.display = "none";
    fileInp.click();
  }

  function uploadImage(img) {
    const storageRef = ref(firebaseStorage, "user/" + img.name);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadPercent(progress.toFixed(0) + "%");
        // console.log("Upload is " + progress.toFixed(0) + "% done");
        // console.log(snapshot.state);
      },
      (error) => {
        console.log(error);
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          setUserData({ ...userData, profilePicture: downloadURL });
        });
      }
    );
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
            <div className="profile-circle" onClick={fileUpload}>
              <input
                type="hidden"
                id="profile-inp"
                name="profilePicture"
                onChange={onchangeHandler}
              />
              {userData.profilePicture !== "" ? (
                <img src={userData.profilePicture} alt="" />
              ) : (
                <div className="upload">{uploadPercent}</div>
              )}
            </div>

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
