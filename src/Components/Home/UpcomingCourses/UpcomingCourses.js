import React, { useEffect, useState } from "react";
import "./Style/UpcomingCoursesStyle.scss";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { OALoaders } from "../../Loaders/OALoader/OALoader";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "../../../index";

export function UpcomingCourses() {
  const [allCourse, setAllCourse] = useState([]);
  const [bool, setBool] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    axios
      .get("course/")
      .then((res) => {
        setAllCourse(res.data);
        setBool(false);
        console.log(res.data, "---courses data");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const leftScroll = () => {
    let cards = document.querySelector(".slider");
    cards.scrollBy(-1200, 0);
  };

  const rightScroll = () => {
    let cards = document.querySelector(".slider");
    cards.scrollBy(1200, 0);
  };
  return (
    <div className="upcomingCourses">
      <h1>Trending Courses</h1>
      <p>
        We not only enlighten students with our knowledge but also help develop
        their career. Our students have grabbed placed in various firms and
        MNCs.
      </p>

      <div className="row">
        <div className="leftIcon" onClick={leftScroll}>
          <BsArrowLeftCircle className="icon" />
        </div>

        <div className="slider">
          {bool === true && (
            <section className="loading">
              <OALoaders />
            </section>
          )}
          {allCourse.map((data, index) => {
            return (
              <div
                // id="slide1"
                className="slide"
                data-aos="zoom-in-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                key={index}
              >
                <div className="card">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${data.courseImage})` }}
                  ></div>
                  <div className="content">
                    <p>{data.courseName}</p>
                    <p>{data.description}</p>
                  </div>
                  <div className="btn">Get More Details</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="rightIcon" onClick={rightScroll}>
          <BsArrowRightCircle className="icon" />
        </div>
      </div>

      <div className="mobile-Slider">
        {bool === true && (
          <section className="loading">
            <OALoaders />
          </section>
        )}
        {allCourse.map((data, index) => {
          return (
            <div
              key={index}
              className="mobile-Slides"
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <div className="card">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${data.courseImage})` }}
                ></div>
                <div className="content">
                  <p>{data.courseName}</p>
                  <p>{data.description}</p>
                </div>
                <div className="btn">Get More Details</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mobile-Row">
        <BsArrowLeftCircle className="leftIcon" />

        <BsArrowRightCircle className="rightIcon" />
      </div>
    </div>
  );
}
