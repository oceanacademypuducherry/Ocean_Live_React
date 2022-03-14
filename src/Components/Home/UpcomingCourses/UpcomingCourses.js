import React from "react";
import "./Style/UpcomingCoursesStyle.scss";
import Angular from "../../Image/courses/Angular.png";
import CPlus from "../../Image/courses/C++.png";
import DataScience from "../../Image/courses/Data science.png";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

export function UpcomingCourses() {
  return (
    <div className="upcomingCourses">
      <h1>Trending Courses</h1>
      <p>
        We not only enlighten students with our knowledge but also help develop
        their career. Our students have grabbed placed in various firms and
        MNCs.
      </p>
      <div className="row">
        <div className="leftIcon">
          <BsArrowLeftCircle className="icon" />
        </div>
        <div className="slider">
          <img src={Angular} alt="" />
          <img src={CPlus} alt="" />
          <img src={DataScience} alt="" />
        </div>
        <div className="rightIcon">
          <BsArrowRightCircle className="icon" />
        </div>
      </div>
    </div>
  );
}
