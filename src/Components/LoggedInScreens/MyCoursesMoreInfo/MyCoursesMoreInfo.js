import React, { useEffect, useState } from "react";
import "./Style/MyCoursesMoreInfoStyle.scss";
import { LoggedInAppbar } from "../LoggedInAppbar/LoggedInAppbar";
import { AiOutlineClockCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { VscCalendar } from "react-icons/vsc";
import { RiTimerFlashLine } from "react-icons/ri";
import { FiCornerDownLeft } from "react-icons/fi";
import { BiCaretDownCircle } from "react-icons/bi";
import Flutter from "../../Image/courses/Flutter.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../index";

export function MyCoursesMoreInfo() {
  const [courseInfo, setCourseInfo] = useState({ syllabus: [] });
  const param = useParams();
  const navigate = useNavigate();
  const [isExpand, setIsExpand] = useState(0);

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
      <LoggedInAppbar />

      <div className="myCoursesMoreInfo">
        <div className="myCourse-Topbar">
          <div className="maxWidth">
            <div
              className="main-icon"
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoIosArrowRoundBack className="icon" />
              Online Course
            </div>
            <br />
            <h1>{courseInfo.courseName} Certificate Development Course</h1>

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
              <p>{courseInfo.description}</p>
              <br />
              <h2>Table Of Content</h2>
              {courseInfo.syllabus.map((syllabus, index) => {
                return (
                  <div key={index} className="viewDetails-Details">
                    <div
                      className="viewDetails-Details-row"
                      onClick={() => {
                        if (isExpand === index + 1) {
                          setIsExpand(0);
                        } else {
                          setIsExpand(index + 1);
                        }
                      }}
                    >
                      <p>{syllabus.title}</p>
                      <p>
                        <BiCaretDownCircle style={{ fontSize: "25px" }} />
                      </p>
                    </div>
                    <div
                      className="viewDetails-Details-row-content"
                      style={{
                        display: index + 1 === isExpand ? "block" : "none",
                      }}
                    >
                      {syllabus.topics.map((topic, index) => {
                        return <p key={index}>{topic}</p>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
