import React from "react";
import "./Style/OfflineDialogStyle.scss";
import offlineDialog from "../../../Image/offlineDialog .svg";
import { IoCloseOutline } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";

export function OfflineDialog(props) {
  const closeDialog = () => {
    document.querySelector(".offlineDialog").style.display = "none";
  };
  return (
    <div className="offlineDialog">
      <div className="card">
        <div className="closeBtn">
          <p>Download Nodejs PDF</p>
          <IoCloseOutline className="closeIcon" onClick={closeDialog} />
        </div>
        <div className="row">
          <img src={offlineDialog} alt="" />

          <div className="col">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Email" />
            <br /> <br />
            <div className="btn">
              <BiMailSend className="icon" />
              Send to Mail
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
