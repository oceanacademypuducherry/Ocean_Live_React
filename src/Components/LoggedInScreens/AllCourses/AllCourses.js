import React from "react";
import "./Style/AllCourses.scss";
import { MdLockClock } from "react-icons/md";
// import { ImCalendar } from "react-icons/im";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PageTitlebar } from "../PageTitlebar/PageTitlebar";
import { Link } from "react-router-dom";

export function AllCourses() {
  return (
    <>
      <PageTitlebar emoji="&#128218;" title="All Courses" />
      <div className="allCourses">
        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <Link to="/dashboard/viewdetails" className="onlineCourses-View-Btn">
            View Details
          </Link>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <div className="onlineCourses-View-Btn">
            <div></div>View Details
          </div>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <div className="onlineCourses-View-Btn">
            <div></div>View Details
          </div>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <div className="onlineCourses-View-Btn">
            <div></div>View Details
          </div>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <div className="onlineCourses-View-Btn">
            <div></div>View Details
          </div>
        </div>

        <div className="onlineCourses-card">
          <div></div>
          <div className="onlineCourses-content">
            <p>Flutter Full Package Course</p>
            <p>Trainer Thamizharasan</p>
            <div>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                90 HRS
              </p>
              <p>
                <span>
                  <FaRegCalendarAlt className="online-icons" />
                </span>
                17 Nov
              </p>
              <p>
                <span>
                  <MdLockClock className="online-icons" />
                </span>
                5:30 PM
              </p>
            </div>
          </div>
          <div className="onlineCourses-View-Btn">
            <div></div>View Details
          </div>
        </div>
      </div>
    </>
  );
}
