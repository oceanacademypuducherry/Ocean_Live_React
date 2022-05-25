import React, { useState, useEffect } from "react";
import "./Style/OnlineViewDetailStyle.scss";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import { AiOutlineClockCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { VscCalendar } from "react-icons/vsc";
import { RiTimerFlashLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiCaretDownCircle } from "react-icons/bi";
import { AppbarCombo } from "../../AppbarCombo/AppbarCombo";
// thamizh added file
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../index";

export function OnlineViewDetail() {
  const [courseInfo, setCourseInfo] = useState({ syllabus: [] });
  const param = useParams();
  const navigate = useNavigate();
  const [isExpand, setIsExpand] = useState(0);
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
          console.log(res.data.error);
          alert(res.data.error);
          navigate("/dashboard/mycourses");
        } else {
          console.log(res.data);
          navigate("/dashboard/mycourses");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

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
      <AppbarCombo />
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
                      {/* <textarea
                        name="query"
                        value={courseBuyingInfo.query}
                        onChange={onchangeHandler}
                      ></textarea> */}
                    </p>
                  </div>
                  <div className="topbar-Card-price-col">
                    ₹ {courseInfo.price}
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
              {courseInfo.syllabus &&
                courseInfo.syllabus.map((syllabus, index) => {
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
                        {syllabus.topics &&
                          syllabus.topics.map((topic, index) => {
                            return <p key={index}>{topic}</p>;
                          })}
                      </div>
                    </div>
                  );
                })}
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
