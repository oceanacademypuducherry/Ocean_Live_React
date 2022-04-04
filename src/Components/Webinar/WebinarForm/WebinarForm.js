import React from "react";
import "./Style/WebinarForm.scss";
import webinarImage from "../../Image/webinar.jpg";

export function WebinarForm() {
  return (
    <section className="webinarForm">
      <p className="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum
        voluptatum delectus aliquam
      </p>
      <p className="subTitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sunt
      </p>
      <section className="row">
        <section className="left">
          <img src={webinarImage} alt=""></img>
          <p>With Thamizharasan</p>
        </section>
        <section className="right">
          <section className="timer">
            <div className="time">
              <span>83</span>
              <span>:</span>
              <span>20</span>

              <span>:</span>
              <span>11</span>
              <span>:</span>
              <span>42</span>
            </div>

            <div className="day">
              <span>DAY</span>
              <span></span>
              <span>HR</span>
              <span></span>
              <span>MIN</span>
              <span></span>
              <span>SEC</span>
            </div>
          </section>
          <p>Webinar Start In</p>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email" />
          <div className="btn">
            <span>Join</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            soluta, voluptates, impedit ullam illum dignissimos veniam expedita
          </p>
        </section>
      </section>
      <div className="circleLg"></div>
      <div className="circle"></div>
      <div className="square"></div>
      <div className="triangle"></div>
    </section>
  );
}
