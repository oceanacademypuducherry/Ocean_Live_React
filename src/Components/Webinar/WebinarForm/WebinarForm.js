import React, { useState } from "react";
import "./Style/WebinarForm.scss";
import webinarImage from "../../Image/webinar.jpg";

import axios from "../../../index";
import { useParams } from "react-router-dom";

export function WebinarForm({
  title,
  subtitle,
  startAt,
  bannerImage,
  mentorName,
  coutDown,
}) {
  const param = useParams();
  const [webinarUser, setWebinarUser] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    webinar: param.webinarId,
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setWebinarUser({ ...webinarUser, [name]: value });
  }
  function registerWebinar() {
    console.log(webinarUser);
    axios
      .post("/webinar/user/add", webinarUser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <section className="webinarForm">
      <p className="title">{title}</p>
      <p className="subTitle">{subtitle}</p>
      <section className="row">
        <section className="left">
          <img src={bannerImage} alt=""></img>
          <p>With {mentorName}</p>
        </section>
        <section className="right">
          <section className="timer">
            <div className="time">
              <span>
                {coutDown.days > 9 ? coutDown.days : `0${coutDown.days}`}
              </span>
              <span>:</span>
              <span>
                {coutDown.hours > 9 ? coutDown.hours : `0${coutDown.hours}`}
              </span>

              <span>:</span>
              <span>
                {coutDown.minutes > 9
                  ? coutDown.minutes
                  : `0${coutDown.minutes}`}
              </span>

              <span>:</span>
              <span>
                {coutDown.seconds > 9
                  ? coutDown.seconds
                  : `0${coutDown.seconds}`}
              </span>
            </div>

            <div className="day">
              <span>DAY</span>
              <span></span>
              <span>HRS</span>
              <span></span>
              <span>MIN</span>
              <span></span>
              <span>SEC</span>
            </div>
          </section>

          <p>Webinar Start In</p>
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={webinarUser.username}
            onChange={onChangeHandler}
          />
          <input
            type="number"
            placeholder="Phone Number"
            name="mobileNumber"
            value={webinarUser.mobileNumber}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={webinarUser.email}
            onChange={onChangeHandler}
          />
          <div className="btn" onClick={registerWebinar}>
            <span>Join</span>
          </div>
          <p>
            {/* // TODO: terms and condition */}
            TODO: terms and condition Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Aspernatur soluta, voluptates, impedit ullam illum
            dignissimos veniam expedita
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
