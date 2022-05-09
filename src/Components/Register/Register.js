import "./Style/RegisterStyle.scss";
import { Appbar } from "../Appbar/Appbar";
import axios from "../../index";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import firebaseStorage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function Register() {
  const param = useParams();
  const navigate = useNavigate();
  const [uploadPercent, setUploadPercent] = useState("Upload");
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
    profilePicture:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    skills: [],
  });

  function onchangeHandler(e) {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      uploadImage(files[0]);
    } else if (name === "dateOfBirth") {
      console.log(value, typeof value);
      let date = new Date();
      console.log(date.toUTCString());
      setUserData({ ...userData, [name]: value });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  }

  async function submit() {
    // axios
    //   .post("user/create", userData)
    //   .then((res) => {
    //     // navigate('/class_room')
    //     return res.data;
    //   })
    //   .then(async (res) => {
    //     await axios
    //       .post("user/login", { mobileNumber: res.mobileNumber })
    //       .then((res) => {
    //         localStorage.setItem("token", res.data.token);
    //         navigate("/dashboard/mycourses");
    //       })
    //       .catch((error) => {
    //         console.log(error.message);
    //       });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    console.log(userData);
  }

  function fileUpload() {
    const fileInp = document.querySelector("#profile-inp");
    fileInp.type = "file";
    fileInp.accept = "image/*";
    fileInp.style.display = "none";
    fileInp.click();
  }

  function uploadImage(img) {
    setUserData({ ...userData, profilePicture: null });
    console.log(img.name);
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
  return (
    <>
      <Appbar />
      <div className="register">
        <div className="register-Card">
          <h1>Register Your Account</h1>

          <div className="upload-Img-Row">
            <div className="register-Card-Circle" onClick={fileUpload}>
              <input
                type="hidden"
                id="profile-inp"
                name="profilePicture"
                onChange={onchangeHandler}
              />
              {userData.profilePicture !== null ? (
                <img src={userData.profilePicture} alt="profile" />
              ) : (
                <div className="upload">{uploadPercent}</div>
              )}
            </div>
            <div className="upload-Btn" onClick={fileUpload}>
              Upload
            </div>
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
              <p>Country</p>
              <input
                type="text"
                name="country"
                value={userData.country}
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
