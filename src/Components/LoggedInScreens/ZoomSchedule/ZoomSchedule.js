import React, { useEffect, useState } from "react";

import "./Style/ZoomScheduleStyle.scss";
import { PageTitlebar } from "./../PageTitlebar/PageTitlebar";
import { TiTick, TiVideo } from "react-icons/ti";
import axios from "../../../index";
import { useNavigate, useParams } from "react-router-dom";

export function ZoomSchedule() {
  const mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [allSchedule, setAllSchedule] = useState([]);
  const [user, setUser] = useState({});
  const [course, setCourse] = useState([]);
  const param = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function isJoin(scheduleId) {
    // make isJoin dynamicly
    axios
      .post("/schedule/isJoin/", {
        token: token,
        scheduleId: scheduleId,
        isJoin: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard/zoompage");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function getAllSchedule() {
    axios
      .post("/schedule/view/" + param.courseId, { token: token })
      .then((res) => {
        console.log(res.data.schedules);
        setAllSchedule(res.data.schedules);
        setUser(res.data.user);
        setCourse(res.data.course);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  useEffect(() => {
    getAllSchedule();
  }, [param.courseId]);
  return (
    <div className="zoomSchedule">
      <PageTitlebar emoji="" title={"Zoom Schedule"} />
      <div className="zoomSchedule-username">
        Hi &#128522; {user.firstName}, you are enrolled in{" "}
        <span style={{ color: "green", fontWeight: "500" }}>
          {course.courseName}
        </span>{" "}
        course.
      </div>

      <div
        className="zoomSchedule-Btn-Row"
        onClick={() => {
          navigate("/dashboard/mycoursemoreinfo/" + course.courseId);
        }}
      >
        <div className="zoomSchedule-viewSyllabus">View Syllabus</div>
      </div>

      {allSchedule.map((schedule, key) => {
        let dateTime = new Date(schedule.classDate);
        let date = dateTime.getDate();
        let month = dateTime.getMonth();

        return (
          <div key={key} className="zoomSchedule-Card">
            <div className="zoomSchedule-Card-Left">
              <p>{schedule.batchTime} PM</p>
              <p>{date}</p>
              <p>{mL[month]}</p>
            </div>
            <div className="zoomSchedule-Card-Right-Row">
              <div className="zoomSchedule-Card-Right-Div1">
                <p>{schedule.topic}</p>
                <p>Zoom Meeting with {schedule.trainer.trainerName}</p>
                <p>60 Minutes</p>
              </div>
              {schedule.isCompleted ? (
                <div className="zoomSchedule-Card-Right-Div2">
                  <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
                  <p>Completed</p>
                </div>
              ) : (
                <div
                  className="zoomSchedule-Card-Right-Div2"
                  onClick={() => {
                    isJoin(schedule._id);
                  }}
                >
                  <TiVideo className="zoomSchedule-Card-Right-Div2-icons" />
                  <p>Join</p>
                </div>
              )}

              <div className="zoomSchedule-Card-Right-Div3"></div>
            </div>
          </div>
        );
      })}
      {/* 
      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div> */}
    </div>
  );
}
