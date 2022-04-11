import React from "react";
import { Footer } from "../../Footer/Footer";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import { OfflineDialog } from "./Dialog/OffilineDialog";
import NodeJs from "../../Image/courses/nodejs.png";
import "./Style/OfflineCourses.scss";

export function OfflineCourses() {
  const openDialog = () => {
    document.querySelector(".offlineDialog ").style.display = "block";
  };

  const closeDialog = () => {
    document.querySelector(".offlineDialog > .card").style.display = "none";
  };
  return (
    <>
      <Appbar />
      <SideNavbar />
      <OfflineDialog />
      {/* <DialogOtp /> */}
      <h1 className="offlineCourses-title">Offline Courses</h1>
      <div className="offlineCourses" onClick={closeSideNavbar}>
        <div className="offlineCourses-card">
          <div className="image">
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p className="title">Node js Full package Courses</p>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              molestiae doloribus adipisci in blanditiis possimus praesentium.
            </p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div className="image">
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p className="title">Node js Full package Courses</p>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              molestiae doloribus adipisci in blanditiis possimus praesentium.
            </p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div className="image">
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p className="title">Node js Full package Courses</p>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              molestiae doloribus adipisci in blanditiis possimus praesentium.
            </p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div className="image">
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p className="title">Node js Full package Courses</p>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              molestiae doloribus adipisci in blanditiis possimus praesentium.
            </p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div className="image">
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p className="title">Node js Full package Courses</p>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              molestiae doloribus adipisci in blanditiis possimus praesentium.
            </p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div className="image">
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p className="title">Node js Full package Courses</p>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              molestiae doloribus adipisci in blanditiis possimus praesentium.
            </p>
          </div>
          <div className="offlineCourses-View-Btn" onClick={openDialog}>
            <p>Download Pdf</p>
          </div>
        </div>

        <div className="offlineCourses-card">
          <div className="image">
            <img src={NodeJs} alt="" />
          </div>
          <div className="offlineCourses-content">
            <p className="title">Node js Full package Courses</p>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              molestiae doloribus adipisci in blanditiis possimus praesentium.
            </p>
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
