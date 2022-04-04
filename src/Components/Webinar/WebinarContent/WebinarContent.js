import React from "react";
import "./Style/WebinarContentStyle.scss";
import Video from "../../Videos/coding.mp4";

export function WebinarContent() {
  return (
    <section className="webinarContent">
      <p className="heading">Watch The Preview For This Webinar</p>

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

      <p className="learn">What You'll Learn</p>
      <ul>
        <li className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          <ul>
            <li className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            </li>
          </ul>
        </li>
        <li className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          <ul>
            <li className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            </li>
          </ul>
        </li>
        <li className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          <ul>
            <li className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            </li>
          </ul>
        </li>

        <li className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          <ul>
            <li className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            </li>
          </ul>
        </li>

        <li className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          <ul>
            <li className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            </li>
          </ul>
        </li>
      </ul>

      <div className="circleMain">
        <div className="circle"></div>
      </div>
      <div className="squareMain">
        <div className="square"></div>
      </div>
    </section>
  );
}
