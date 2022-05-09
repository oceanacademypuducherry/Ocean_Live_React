import React from "react";
import "./Style/OfflineDialogStyle.scss";
import offlineDialog from "../../../Image/offlineDialog .svg";
import { IoCloseOutline } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";

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
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email" required />
            <br /> <br />
            <div className="btn">
              <div className="left"></div>
              <div className="right"></div>
              <div className="top"></div>
              <div className="bottom"></div>
              <div
                className="btnContent"
                onClick={() => {
                  // console.log(props.downloadLink);
                  window.open(props.downloadLink);
                  // window.location.href = props.downloadLink;
                }}
              >
                <HiDownload className="icon" />
                <p>Download Pdf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
