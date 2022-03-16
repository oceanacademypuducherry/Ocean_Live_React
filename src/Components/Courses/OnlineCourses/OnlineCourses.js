import React from "react";
import { Footer } from "../../Footer/Footer";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import "./Style/OnlineCourses.scss";
import { MdLockClock } from "react-icons/md";
// import { ImCalendar } from "react-icons/im";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PageTitlebar } from "../../LoggedInScreens/PageTitlebar/PageTitlebar";
import { Link } from "react-router-dom";

export function OnlineCourses() {
  return (
    <>
      <Appbar />
      <SideNavbar />
      <h1 className="onlineCourses-title">Online Courses</h1>
      <div onClick={closeSideNavbar} className="onlineCourses">
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
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
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
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
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
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
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
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
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
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
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
          <Link to="viewdetails" className="onlineCourses-View-Btn">
            <span>View Details</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
