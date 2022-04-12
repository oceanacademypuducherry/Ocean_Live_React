import React, { useEffect } from "react";
import "./Style/WebinarContentStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Video from "../../Videos/production ID_4974883.mp4";
import { BiChevronDown } from "react-icons/bi";

export function WebinarContent({ topics }) {
  useEffect(() => {
    document.querySelector(".video").play();
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section
      className="webinar-Content"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <p className="heading">Watch The Preview For This Webinar</p>

      <section className="webinarRow">
        <section className="webinarLeft">
          <video
            // playsInline
            controls={false}
            className="video"
            loop={true}
            autoPlay={true}
            muted={true}
          >
            {/* // TODO: add video url in admin side */}
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="webinarRight">
          <p className="learn">What You'll Learn</p>
          {topics.map((topic, index) => {
            return (
              <div key={index} className="dropDown">
                <div className="dropDown-Row">
                  <span>{topic.title}</span>

                  <span>
                    <BiChevronDown />
                  </span>
                </div>
                <span>{topic.subtitle}</span>
              </div>
            );
          })}
          {/* 
          <div className="dropDown">
            <div className="dropDown-Row">
              <span>Courses Overview</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-Row">
              <span>Lorem ipsum dolor sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-Row">
              <span>Courses dolor sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-Row">
              <span>Courses Overview</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-Row">
              <span> Courses dolor amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-Row">
              <span>Courses Courses dolor sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-Row">
              <span>Courses dolor sit amet Overview</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-Row">
              <span>Courses Courses sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div>

          <div className="dropDown">
            <div className="dropDown-Row">
              <span>Courses dolor sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div> */}
        </section>
      </section>

      <div className="circleMain">
        <div className="circle"></div>
      </div>
      <div className="squareMain">
        <div className="square"></div>
      </div>
    </section>
  );
}
