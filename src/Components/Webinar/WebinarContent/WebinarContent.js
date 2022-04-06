import React from "react";
import "./Style/WebinarContentStyle.scss";
import Video from "../../Videos/coding.mp4";
import { BiChevronDown } from "react-icons/bi";

export function WebinarContent() {
  return (
    <section className="webinarContent">
      <p className="heading">Watch The Preview For This Webinar</p>

      <section className="webinarRow">
        <section className="left">
          <video
            controls={false}
            className="video"
            loop={true}
            autoPlay={true}
            muted={true}
            // width={200}
          >
            <source src={Video} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="right">
          <p className="learn">What You'll Learn</p>
          <div className="dropdown">
            <div className="dropdown-Row">
              <span>Courses Overview</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>

          <div className="dropdown">
            <div className="dropdown-Row">
              <span>Courses Overview</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>

          <div className="dropdown">
            <div className="dropdown-Row">
              <span>Lorem ipsum dolor sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>

          <div className="dropdown">
            <div className="dropdown-Row">
              <span>Courses dolor sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>

          <div className="dropdown">
            <div className="dropdown-Row">
              <span>Courses Overview</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>

          <div className="dropdown">
            <div className="dropdown-Row">
              <span> Courses dolor amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>

          <div className="dropdown">
            <div className="dropdown-Row">
              <span>Courses Courses dolor sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>

          <div className="dropdown">
            <div className="dropdown-Row">
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

          <div className="dropdown">
            <div className="dropdown-Row">
              <span>Courses Courses sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>

          <div className="dropdown">
            <div className="dropdown-Row">
              <span>Courses dolor sit amet</span>
              <span>
                <BiChevronDown />
              </span>
            </div>
            {/* <div className="content">
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
              <li>Using PostCSS Plugins</li>
            </div> */}
          </div>
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
