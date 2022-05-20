import React, { useEffect, useState } from "react";
import { Footer } from "../../Footer/Footer";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import { OfflineDialog } from "./Dialog/OffilineDialog";
import NodeJs from "../../Image/courses/nodejs.png";
import "./Style/OfflineCourses.scss";
import axios from "../../../index";

export function OfflineCourses() {
  const [allOfflineCourse, setAllOfflineCourse] = useState([]);
  const [downloadLink, setDownloadLink] = useState(null);

  const openDialog = (pdfLink) => {
    setDownloadLink(pdfLink);
    document.querySelector(".offlineDialog ").style.display = "block";
  };

  const closeDialog = () => {
    document.querySelector(".offlineDialog > .card").style.display = "none";
  };
  function getAllOfflineCourse() {
    axios
      .get("/offlinecourse/")
      .then((res) => {
        setAllOfflineCourse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllOfflineCourse();
  }, []);
  return (
    <>
      <Appbar />
      <SideNavbar />
      <OfflineDialog downloadLink={downloadLink} />
      {/* <DialogOtp /> */}
      <h1 className="offlineCourses-title">Offline Courses</h1>
      <div className="offlineCourses" onClick={closeSideNavbar}>
        {allOfflineCourse.map((course, index) => {
          return (
            <div key={index} className="offlineCourses-card">
              <div className="image">
                <img src={course.courseImage} alt="" />
              </div>
              <div className="offlineCourses-content">
                <p className="title">
                  {course.courseName} Full package Courses
                </p>
                <p className="subTitle">{course.description}</p>
              </div>
              <div
                className="offlineCourses-View-Btn"
                onClick={() => {
                  openDialog(course.syllabusLink);
                }}
              >
                <p>Download Pdf</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
