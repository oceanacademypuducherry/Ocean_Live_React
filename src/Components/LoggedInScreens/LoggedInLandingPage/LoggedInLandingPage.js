import React, { useState } from "react";
import { LoggedInAppbar } from "../LoggedInAppbar/LoggedInAppbar";
import { CoursesSidebar } from "../CoursesSidebar/CoursesSidebar";
// import { MyCourseCard } from "../CourseCard/CourseCard";
// import { ZoomSchedule } from "../ZoomSchedule/ZoomSchedule";
// import { PageTitlebar } from "../PageTitlebar/PageTitlebar";
// import { AllCourses } from "../AllCourses/AllCourses";
import { MobileSidebar } from "./../MobileSidebar/MobileSidebar";
import { Outlet } from "react-router-dom";
import "./Style/LoggedInLandingPageStyle.scss";

export function LoggedInLandingPage() {
  const state = () => {
    console.log(1);
  };
  return (
    <>
      <LoggedInAppbar state={state} />
      <div className="dashboardRow">
        <MobileSidebar />
        <div className="courseSidebarMain">
          <CoursesSidebar />
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
