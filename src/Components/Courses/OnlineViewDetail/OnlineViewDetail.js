import React, { useState, useEffect } from "react";
import "./Style/OnlineViewDetailStyle.css";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import {
  AiOutlineClockCircle,
  AiOutlineVideoCamera,
  // AiOutlineClockCircle,
} from "react-icons/ai";
import { VscCalendar } from "react-icons/vsc";
import { RiTimerFlashLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiCaretDownCircle } from "react-icons/bi";
import Flutter from "../../Image/courses/Flutter.png";
// thamizh added file
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../index";

export function OnlineViewDetail() {
  const [courseInfo, setCourseInfo] = useState({});
  const param = useParams();
  const navigate = useNavigate();

  const closeContent = () => {
    let doc = document;
    let p = doc.querySelectorAll(".viewDetails-Details-row-content > p");
    for (const i of p) {
      // i.style.tra
      console.log((i.style.display = "none"));
    }
  };

  useEffect(() => {
    axios
      .get("course/" + param.courseId)
      .then((res) => {
        console.log(res.data);
        setCourseInfo(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <>
      <Appbar />
      <SideNavbar />
      <div className="OnlineViewDetail" onClick={closeSideNavbar}>
        <div className="viewDetails-topbar">
          <div className="onlineView-maxWidth">
            <div className="topbar-Content">
              <div className="topbar-Content-Back-Btn">
                <span>
                  <IoIosArrowRoundBack />
                </span>
                Online Course
              </div>
              <br />
              <h1>{courseInfo.courseName} Certificate Development Course</h1>
              <p>
                <s>Tutor Name : Thamizharasan</s>
              </p>
              <div className="topbar-Content-Row">
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
            <div className="topbar-Card">
              <div
                style={{ backgroundImage: `url(${courseInfo.courseImage})` }}
                className="topbar-Card-image"
              ></div>
              <div className="topbar-Card-price-date">
                <div className="topbar-Card-date-row">
                  <div className="topbar-Card-date-col">
                    <p>
                      <span>
                        <AiOutlineClockCircle />
                      </span>
                      12:00 AM
                    </p>
                    <p>
                      <span>
                        <VscCalendar />
                      </span>
                      Nov 22
                    </p>
                    <p>
                      <span>
                        <RiTimerFlashLine />
                      </span>
                      {courseInfo.duration} Hrs
                    </p>
                  </div>
                  <div className="topbar-Card-price-col">
                    $ {courseInfo.price}
                  </div>
                </div>
                <div className="topbar-Card-price-date-btn">
                  {/*  */}
                  Enroll Now
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="viewDetails-contents">
          <div className="viewDetails-maxwidth">
            <div className="course-details">
              <h2>Course Details</h2>
              <p>
                {courseInfo.description}
                ...
              </p>
              <br />
              <h2>Table Of Content</h2>
              <div className="viewDetails-Details">
                <div className="viewDetails-Details-row" onClick={closeContent}>
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
            {/* <div
            style={{ width: "100px", height: "100px", backgroundColor: "red" }}
          ></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
