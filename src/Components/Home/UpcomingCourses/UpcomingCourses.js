import React, { useEffect, useState } from "react";
import "./Style/UpcomingCoursesStyle.scss";
import Angular from "../../Image/courses/Angular.png";
import DataScience from "../../Image/courses/Data science.png";
import C from "../../Image/courses/C.png";
import Fullstack from "../../Image/courses/Fullstack developer.png";
import Javascript from "../../Image/courses/Javascript.png";
import NodeJs from "../../Image/courses/nodejs.png";
import CPlus from "../../Image/courses/C++.png";
import Frontend from "../../Image/courses/Front_end_developer.png";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

export function UpcomingCourses() {
  const leftScroll = () => {
    let cards = document.querySelector(".slider");
    cards.scrollBy(-1240, 0);
  };

  const rightScroll = () => {
    let cards = document.querySelector(".slider");
    cards.scrollBy(1240, 0);
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
                style={{ backgroundImage: `url(${Frontend})` }}
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
                style={{ backgroundImage: `url(${CPlus})` }}
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
                style={{ backgroundImage: `url(${C})` }}
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

          <div id="slide4" className="slide">
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Javascript})` }}
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

          <div id="slide5" className="slide">
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${Javascript})` }}
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

          <div id="slide6" className="slide">
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: `url(${NodeJs})` }}
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

          <div id="slide7" className="slide">
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

          <div id="slide7" className="slide">
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
        <div className="rightIcon" onClick={rightScroll}>
          <BsArrowRightCircle className="icon" />
        </div>
      </div>

      <div className="mobile-Slider">
        <div className="mobile-Slides">
          <div className="card">
            <div
              className="img"
              style={{ backgroundImage: `url(${Frontend})` }}
            ></div>
            <div className="content">
              <p>Angular</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                eaque aliquam nobis, qui, blanditiis voluptate necessitatibus
                minus voluptas ipsum.
              </p>
            </div>
            <div className="btn">Get More Details</div>
          </div>
        </div>

        <div className="mobile-Slides">
          <div className="card">
            <div
              className="img"
              style={{ backgroundImage: `url(${Frontend})` }}
            ></div>
            <div className="content">
              <p>Angular</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                eaque aliquam nobis, qui, blanditiis voluptate necessitatibus
                minus voluptas ipsum.
              </p>
            </div>
            <div className="btn">Get More Details</div>
          </div>
        </div>

        <div className="mobile-Slides">
          <div className="card">
            <div
              className="img"
              style={{ backgroundImage: `url(${Frontend})` }}
            ></div>
            <div className="content">
              <p>Angular</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                eaque aliquam nobis, qui, blanditiis voluptate necessitatibus
                minus voluptas ipsum.
              </p>
            </div>
            <div className="btn">Get More Details</div>
          </div>
        </div>

        <div className="mobile-Slides">
          <div className="card">
            <div
              className="img"
              style={{ backgroundImage: `url(${Frontend})` }}
            ></div>
            <div className="content">
              <p>Angular</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                eaque aliquam nobis, qui, blanditiis voluptate necessitatibus
                minus voluptas ipsum.
              </p>
            </div>
            <div className="btn">Get More Details</div>
          </div>
        </div>

        <div className="mobile-Slides">
          <div className="card">
            <div
              className="img"
              style={{ backgroundImage: `url(${Frontend})` }}
            ></div>
            <div className="content">
              <p>Angular</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                eaque aliquam nobis, qui, blanditiis voluptate necessitatibus
                minus voluptas ipsum.
              </p>
            </div>
            <div className="btn">Get More Details</div>
          </div>
        </div>

        <div className="mobile-Slides">
          <div className="card">
            <div
              className="img"
              style={{ backgroundImage: `url(${Frontend})` }}
            ></div>
            <div className="content">
              <p>Angular</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                eaque aliquam nobis, qui, blanditiis voluptate necessitatibus
                minus voluptas ipsum.
              </p>
            </div>
            <div className="btn">Get More Details</div>
          </div>
        </div>
      </div>

      <div className="mobile-Row">
        <BsArrowLeftCircle className="leftIcon" />

        <BsArrowRightCircle className="rightIcon" />
      </div>
    </div>
  );
}
