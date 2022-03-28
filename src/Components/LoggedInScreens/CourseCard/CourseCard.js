import React, { useEffect, useState } from "react";
import "./Style/CourseCard.scss";
// import { MdLockClock } from "react-icons/md";
// import { ImCalendar } from "react-icons/im";
// import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "../../Image/courses/Flutter.png";
import { PageTitlebar } from "../PageTitlebar/PageTitlebar";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../index";

export function MyCourseCard() {
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

        navigate("/");
      });
  }
  useEffect(() => {
    getPurchasedCourse();
  }, []);

  return (
    <>
      <PageTitlebar emoji="&#128214;" title={"My Courses"} />
      <div className="myCourse">
        {purchasedCourse.map((course, index) => {
          console.log(course);
          return (
            <div key={index} className="myCourseCard">
              <div
                style={{ backgroundImage: `url(${course.course.courseImage})` }}
              ></div>
              <div className="myCourse-content">
                <p>{course.course.courseName} Full Package Course</p>
              </div>

              <Link to="/dashboard/mycoursemoreinfo" className="myCourse-Btn">
                More Info
              </Link>
            </div>
          );
        })}

        {/* <div className="myCourseCard">
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
        </div> */}
      </div>
    </>
  );
}
