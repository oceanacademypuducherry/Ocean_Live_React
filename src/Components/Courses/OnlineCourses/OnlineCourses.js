import React, { useState, useEffect } from "react";
import { Footer } from "../../Footer/Footer";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import "./Style/OnlineCourses.scss";
import { MdLockClock } from "react-icons/md";
// import { ImCalendar } from "react-icons/im";
import { FaRegCalendarAlt } from "react-icons/fa";
// import { PageTitlebar } from "../../LoggedInScreens/PageTitlebar/PageTitlebar";
import { Link } from "react-router-dom";
import axios from "../../../index";

export function OnlineCourses() {
  const [allCourse, setAllCourse] = useState([]);

  useEffect(() => {
    axios
      .get("course/")
      .then((res) => {
        setAllCourse(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <Appbar />
      <SideNavbar />
      <h1 className="onlineCourses-title">Online Courses</h1>
      <div onClick={closeSideNavbar} className="onlineCourses">
        {allCourse.map((course, index) => {
          return (
            <div key={index} className="onlineCourses-card">
              <div
                style={{ backgroundImage: `url(${course.courseImage})` }}
              ></div>
              <div className="onlineCourses-content">
                <p>{course.courseName} Full Package Course</p>
                <p>
                  <s>Trainer Thamizharasan</s>
                </p>
                <div>
                  <p>
                    <span>
                      <MdLockClock className="online-icons" />
                    </span>
                    {course.duration} HRS
                  </p>
                  <p>
                    <span>
                      <FaRegCalendarAlt className="online-icons" />
                    </span>
                    17 Nov
                  </p>
                  <p>
                    <span>
                      <MdLockClock className="online-icons" />
                    </span>
                    5:30 PM
                  </p>
                </div>
              </div>
              <Link
                to={"/onlinecourses/viewdetails/" + course.courseId}
                className="onlineCourses-View-Btn"
              >
                <span>View Details</span>
              </Link>
            </div>
          );
        })}
        {/* <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
          </Link>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
          </Link>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
          </Link>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
          </Link>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
          </Link>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
          </Link>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
