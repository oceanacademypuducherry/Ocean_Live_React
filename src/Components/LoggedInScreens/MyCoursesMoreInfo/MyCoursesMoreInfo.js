import React from "react";
import "./Style/MyCoursesMoreInfoStyle.scss";
import { LoggedInAppbar } from "../LoggedInAppbar/LoggedInAppbar";
import { AiOutlineClockCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { VscCalendar } from "react-icons/vsc";
import { RiTimerFlashLine } from "react-icons/ri";
import { FiCornerDownLeft } from "react-icons/fi";
import { BiCaretDownCircle } from "react-icons/bi";
import Flutter from "../../Image/courses/Flutter.png";

export function MyCoursesMoreInfo() {
  return (
    <>
      <LoggedInAppbar />

      <div className="myCoursesMoreInfo">
        <div className="myCourse-Topbar">
          <div className="maxWidth">
            <div className="main-icon">
              <IoIosArrowRoundBack className="icon" />
              Online Course
            </div>
            <br />
            <h1>Python Certificate Development Course</h1>
            <p>Tutor Name : Thamizharasan</p>
            <div className="myCourse-Third-Row">
              <p>
                <span>
                  <AiOutlineClockCircle />
                </span>
                Online Course
              </p>
              <p>
                <span>
                  <AiOutlineVideoCamera />
                </span>
                By Zoom
              </p>
            </div>
          </div>
        </div>

        {/* working style as same class in courses view design */}

        <div className="viewDetails-contents">
          <div className="viewDetails-maxwidth">
            <div className="course-details">
              <h2>Course Details</h2>
              <p>
                Python has been one of the flexible, premier and powerful
                open-source languages that are easy to learn and implement. The
                python training will primarily focus on understanding key
                concepts, basic ideas of developing web application and
                implementing lot of modules and packages to encourage modularity
                of the code and helps to improve the application performance.
              </p>
              <br />
              <h2>Table Of Content</h2>
              <div className="viewDetails-Details">
                <div className="viewDetails-Details-row">
                  <p>INTRODUCTION</p>
                  <p>
                    <BiCaretDownCircle style={{ fontSize: "25px" }} />
                  </p>
                </div>
                <div className="viewDetails-Details-row-content">
                  <p>History</p>
                  <p>Installation</p>
                  <p>Routing</p>
                  <p>URL Building</p>
                  <p>HTTPS Methods</p>
                  <p>Templates</p>
                  <p>Request Qbject</p>
                  <p>Sending Form Data to Template</p>
                  <p>Cookies</p>
                  <p>Session</p>
                  <p>Redirection</p>
                  <p>Flask-Mail</p>
                  <p>SQL Alchemy</p>
                  <p>File uploading</p>
                  <p>DB Conectivity</p>
                  <p>Live Project</p>
                  <p>Deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
