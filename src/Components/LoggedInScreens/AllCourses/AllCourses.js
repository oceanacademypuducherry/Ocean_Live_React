import React, { useEffect, useState } from "react";
import axios from "../../../index";
import "./Style/AllCourses.scss";
import { MdLockClock } from "react-icons/md";
// import { ImCalendar } from "react-icons/im";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PageTitlebar } from "../PageTitlebar/PageTitlebar";
import { Link } from "react-router-dom";

export function AllCourses() {
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
      <PageTitlebar emoji="&#128218;" title="All Courses" />
      <div className="allCourses">
        {allCourse.map((course, index) => {
          return (
            <div key={index} className="onlineCourses-card">
              <div
                style={{ backgroundImage: `url(${course.courseImage})` }}
              ></div>
              <div className="onlineCourses-content">
                <p>{course.courseName} Full Package Course</p>

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
                to={"/dashboard/viewdetails/" + course.courseId}
                className="onlineCourses-View-Btn"
              >
                <span>View Details</span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
