import React from "react";
import { Footer } from "../../Footer/Footer";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import { OfflineDialog } from "./Dialog/OffilineDialog";
import NodeJs from "../../Image/courses/nodejs.png";
// import { OfflineDialogOtp } from "./Dialog/OfflineDialogOtp";
import "./Style/OfflineCourses.scss";
// import { MdLockClock } from "react-icons/md";
// import { ImCalendar } from "react-icons/im";
// import { FaRegCalendarAlt } from "react-icons/fa";

export function OfflineCourses() {
  const openDialog = () => {
    document.querySelector(".offlineDialog ").style.display = "block";
    // window.onscroll = function () {
    //   window.scrollTo(0, 0);
    // };
  };

  const closeDialog = () => {
    document.querySelector(".offlineDialog > .card").style.display = "none";
  };
  return (
    <>
      <Appbar />
      <SideNavbar />
      {/* <OfflineDialog /> */}
      {/* <DialogOtp /> */}
      <h1 className="offlineCourses-title">Offline Courses</h1>
      <div className="offlineCourses" onClick={closeSideNavbar}>
        <div className="offlineCourses-card">
          <div>
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p>Node js Full package Courses</p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div>
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p>Node js Full package Courses</p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div>
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p>Node js Full package Courses</p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div>
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p>Node js Full package Courses</p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div>
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p>Node js Full package Courses</p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div>
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p>Node js Full package Courses</p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div>
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p>Node js Full package Courses</p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div>
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p>Node js Full package Courses</p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
