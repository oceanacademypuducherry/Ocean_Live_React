import React, { useState, useEffect, PureComponent } from "react";
import { LoggedInAppbar } from "../LoggedInAppbar/LoggedInAppbar";
import { CoursesSidebar } from "../CoursesSidebar/CoursesSidebar";
// import { MyCourseCard } from "../CourseCard/CourseCard";
// import { ZoomSchedule } from "../ZoomSchedule/ZoomSchedule";
// import { PageTitlebar } from "../PageTitlebar/PageTitlebar";
// import { AllCourses } from "../AllCourses/AllCourses";
import { MobileSidebar } from "./../MobileSidebar/MobileSidebar";
import { Outlet } from "react-router-dom";
import "./Style/LoggedInLandingPageStyle.scss";
import { useNavigate } from "react-router-dom";
import axios from "../../../index";

export function LoggedInLandingPage() {
  const navigate = useNavigate();

  const [purchasedCourse, setPurchaseedCourse] = useState([]);

  async function getPurchasedCourse() {
    const token = await localStorage.getItem("token");

    await axios
      .post("purchased/", { token: token })
      .then((res) => {
        setPurchaseedCourse(res.data);
      })
      .catch((error) => {
        console.log(error.message);
        alert("You need to Login first");
        navigate("/");
      });
  }

  useEffect(() => {
    let session = localStorage.getItem("token");
    getPurchasedCourse();
    if (session === null || session === "undefined") {
      alert("You need to Login First");
      navigate("/login");
    }
  }, []);

  const state = () => {
    console.log(1);
  };
  return (
    <>
      <LoggedInAppbar state={state} />
      <div className="dashboardRow">
        <MobileSidebar />
        <div className="courseSidebarMain">
          <CoursesSidebar purchasedCourse={purchasedCourse} />
        </div>
        <div className="courseCardMain">
          <div className="zoomScheduleMainRow">
            <Outlet />
          </div>

          {/* <div className="courseCardMainRow"> */}
          {/* <MyCourseCard /> */}
          {/* <AllCourses /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
