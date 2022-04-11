import React, { useState, useEffect } from "react";
import "./Style/OnlineViewDetailStyle.css";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import { AiOutlineClockCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { VscCalendar } from "react-icons/vsc";
import { RiTimerFlashLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiCaretDownCircle } from "react-icons/bi";
import Flutter from "../../Image/courses/Flutter.png";
// thamizh added file
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../index";

export function OnlineViewDetail() {
  const [courseInfo, setCourseInfo] = useState({ syllabus: [] });
  const param = useParams();
  const navigate = useNavigate();
  const [courseBuyingInfo, setCourseBuyingInfo] = useState({
    batchTime: "9-10",
    batchType: "week-days",
    query: "",
    token: localStorage.getItem("token"),
  });
  function onchangeHandler(e) {
    const { name, value } = e.target;
    setCourseBuyingInfo({ ...courseBuyingInfo, [name]: value });
  }
  async function buyCourse() {
    await axios
      .post("purchased/" + param.courseId, courseBuyingInfo)
      .then((res) => {
        if (res.data.error) {
          alert("You need to login first");
          navigate("/login");
        } else {
          console.log(res.data);
          navigate("/dashboard/mycourses");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

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
                      <select
                        name="batchTime"
                        value={courseBuyingInfo.batchTime}
                        onChange={onchangeHandler}
                      >
                        <option value="9-10">9-10</option>
                        <option value="10-11">10-11</option>
                        <option value="11-12">11-12</option>
                        <option value="1-2">1-2</option>
                        <option value="2-3">2-3</option>
                      </select>
                    </p>
                    <p>
                      <span>
                        <VscCalendar />
                      </span>
                      Nov 22
                      <select
                        name="batchType"
                        value={courseBuyingInfo.batchType}
                        onChange={onchangeHandler}
                      >
                        <option value="week-days">Week-Days</option>
                        <option value="week-end">Week-End</option>
                      </select>
                    </p>
                    <p>
                      <span>
                        <RiTimerFlashLine />
                      </span>
                      {courseInfo.duration} Hrs
                      <textarea
                        name="query"
                        value={courseBuyingInfo.query}
                        onChange={onchangeHandler}
                      ></textarea>
                    </p>
                  </div>
                  <div className="topbar-Card-price-col">
                    $ {courseInfo.price}
                  </div>
                </div>
                <div
                  className="topbar-Card-price-date-btn"
                  onClick={() => {
                    console.log(courseBuyingInfo);
                    buyCourse();
                  }}
                >
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
                  {courseInfo.syllabus.map((topic, index) => {
                    return <p key={index}>{topic}</p>;
                  })}
                  {/* <p>History</p>
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
                  <p>Deployment</p> */}
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
