import React, { useState, useEffect } from "react";
import { Footer } from "../../Footer/Footer";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import { OALoaders } from "../../Loaders/OALoader/OALoader";
import "./Style/OnlineCourses.scss";
import { MdLockClock } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "../../../index";

export function OnlineCourses() {
  const [allCourse, setAllCourse] = useState([]);
  const [bool, setBool] = useState(true);

  useEffect(() => {
    axios
      .get("course/")
      .then((res) => {
        setBool(false);
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
      {bool === true && (
        <section className="loading">
          <OALoaders />
        </section>
      )}
      <div onClick={closeSideNavbar} className="onlineCourses">
        {allCourse.map((course, index) => {
          return (
            <div key={index} className="onlineCourses-card">
              <div className="image">
                <img src={course.courseImage} alt="" />
              </div>
              <div className="onlineCourses-content">
                <p className="topic">{course.courseName} Full Package Course</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  tempora quasi officia, itaque dolore omnis eveniet, laudantium
                  non temporibus nihil hic distinctio molestias consectetur
                  numquam quae earum dicta delectus. Consectetur?
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
      </div>
      <br /> <br />
      <Footer />
    </>
  );
}
