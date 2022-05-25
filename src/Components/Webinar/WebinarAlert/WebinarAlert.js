import axios from "../../../index";
import React, { useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";
import "./Style/WebinarStyle.scss";
import { useNavigate } from "react-router-dom";

export function WebinarAlert() {
  const navigate = useNavigate();
  const [coutDown, setCounDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [webinarData, setWebinarData] = useState(null);
  function timer(webinarStartDate) {
    let webinarDate = new Date(webinarStartDate);
    var timestamp = webinarDate.getTime() - Date.now();
    timestamp /= 1000; // from ms to seconds
    function component(timestamp, calculate) {
      return Math.floor(timestamp / calculate);
    }
    let timeCondition = () => {
      // execute code each second
      timestamp--; // decrement timestamp with one second each second
      let days = component(timestamp, 24 * 60 * 60), // calculate days from timestamp
        hours = component(timestamp, 60 * 60) % 24, // hours
        minutes = component(timestamp, 60) % 60, // minutes
        seconds = component(timestamp, 1) % 60; // seconds
      setCounDown({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
      if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
        clearInterval(timerFunction);
        // navigate("/webinarview");
        return;
      }
    };

    const timerFunction = setInterval(timeCondition, 1000);
  }
  function getWebinarData() {
    axios
      .get("/webinar/notification")
      .then((res) => {
        console.log(res.data);
        setWebinarData(res.data);
        timer(res.data.startAt);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  useEffect(() => {
    getWebinarData();
  }, []);
  return (
    webinarData && (
      <section className="webinarAlert">
        <section className="center">
          <div className="time">
            <span>
              {" "}
              {coutDown.days > 9 ? coutDown.days : `0${coutDown.days}`}
            </span>
            <span>:</span>
            <span>
              {" "}
              {coutDown.hours > 9 ? coutDown.hours : `0${coutDown.hours}`}
            </span>
            <span>:</span>
            <span>
              {" "}
              {coutDown.minutes > 9 ? coutDown.minutes : `0${coutDown.minutes}`}
            </span>
            <span>:</span>
            <span>
              {" "}
              {coutDown.seconds > 9 ? coutDown.seconds : `0${coutDown.seconds}`}
            </span>
          </div>

          <div className="courseTitle">
            <span>{webinarData.course}</span> value based webinar Now
          </div>

          <div
            className="join-Btn"
            onClick={() => {
              navigate("/webinar/" + webinarData._id);
            }}
          >
            Join
          </div>
          <div
            className="upcomimg-Btn"
            onClick={() => {
              navigate("/webinarview");
            }}
          >
            Upcoming
          </div>
        </section>
        <div className="close">
          <VscClose />
        </div>
      </section>
    )
  );
}
