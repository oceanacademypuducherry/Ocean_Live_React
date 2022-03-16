import React, { useEffect, useState } from "react";
import "./Style/UpcomingCoursesStyle.scss";
import Angular from "../../Image/courses/Angular.png";
import CPlus from "../../Image/courses/C++.png";
import DataScience from "../../Image/courses/Data science.png";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

export function UpcomingCourses() {
  const [count, setCount] = useState(0);
  const leftScroll = () => {
    let cards = document.querySelectorAll(".slider > .slide");

    if (count < cards.length - 1) {
      setCount(count + 1);
      console.log(count + 1, "count");
      cards[count + 1].scrollIntoView({
        behavior: "smooth",
      });
    } else {
      setCount(0);
      console.log(0);
      cards[0].scrollIntoView({
        behavior: "smooth",
      });
    }
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
          <div id="slide1" className="slide">
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
          </div>

          <div id="slide2" className="slide">
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
          </div>

          <div id="slide3" className="slide">
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Angular})` }}
              ></div>
              <div className="content">
                <p>Angular</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque eaque aliquam nobis, qui, blanditiis voluptate
                  necessitatibus minus voluptas ipsum.
                </p>
              </div>
              <div className="btn">Get More Details</div>
            </div>
          </div>
        </div>
        <div className="rightIcon">
          <BsArrowRightCircle className="icon" />
        </div>
      </div>
    </div>
  );
}
