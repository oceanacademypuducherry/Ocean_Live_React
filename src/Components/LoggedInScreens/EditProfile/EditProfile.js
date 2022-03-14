import React from "react";
import "./Style/EditProfile.scss";
import { LoggedInAppbar } from "../LoggedInAppbar/LoggedInAppbar";
import { IoIosArrowRoundBack } from "react-icons/io";

export function EditProfile() {
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
              <h1>0</h1>
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
              <input type="text" value="Mohamed" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Last Name</label>
              <input type="text" value="Ijass" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Gender</label>
              <input type="text" value="Male" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Date of Birth</label>
              <input type="date" value="-" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">E-mail Address</label>
              <input type="email" value="jass07rtr@gmail.com" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Company/School</label>
              <input type="text" value="Ocean Academy" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Degree</label>
              <input type="text" value="-" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Country</label>
              <input type="text" value="India" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">State</label>
              <input type="text" value="Puducherry" />
            </div>

            <div className="editProfile-textField">
              <label htmlFor="">Phone Number</label>
              <input type="text" value="9876543210" />
            </div>
          </div>
          <br /> <br />
          <div className="editProfile-Update-Btn">Update</div>
        </div>
      </div>
    </>
  );
}
