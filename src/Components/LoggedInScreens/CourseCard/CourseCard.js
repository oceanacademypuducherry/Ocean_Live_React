import React from "react";
import "./Style/CourseCard.scss";
// import { MdLockClock } from "react-icons/md";
// import { ImCalendar } from "react-icons/im";
// import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "../../Image/courses/Flutter.png";
import { PageTitlebar } from "../PageTitlebar/PageTitlebar";
import { Link } from "react-router-dom";

export function MyCourseCard() {
  return (
    <>
      <PageTitlebar emoji="&#128214;" title={"My Courses"} />
      <div className="myCourse">
        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>

        <div className="myCourseCard">
          <div style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="myCourse-content">
            <p>Flutter Full Package Course | Trainer Thamizharasan</p>
          </div>
          <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
            More Info
          </Link>
        </div>
      </div>
    </>
  );
}
