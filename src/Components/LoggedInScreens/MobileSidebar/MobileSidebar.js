import React from "react";
import { Link } from "react-router-dom";
import "./Style/MobileSidebarStyle.scss";
import { VscClose } from "react-icons/vsc";

export function MobileSidebar() {
  return (
    <div className="mobileSidebar-Row">
      <div className="mobileSidebar-CloseBtn">
        <VscClose />
      </div>
      <div className="mobileSidebar">
        <div className="mobileSidebar-EnrolledCourses">
          <div className="mobileSidebar-EnrolledCourses-Heading">
            Enrolled Courses
          </div>
          <Link className="mobileSidebar-router" to="/dashboard/zoom">
            Flask
          </Link>
          <Link className="mobileSidebar-router" to="/dashboard/zoom">
            Python
          </Link>
          <Link className="mobileSidebar-router" to="/dashboard/zoom">
            Java
          </Link>
        </div>
        {/* <hr /> */}
        <div className="mobileSidebar-Routers">
          <div className="mobileSidebar-Routers-Heading">Pages</div>
          <Link className="mobileSidebar-router" to="/dashboard/mycourses">
            My Courses
          </Link>
          <Link className="mobileSidebar-router" to="/dashboard/allcourses">
            All Courses
          </Link>
          <Link className="mobileSidebar-router" to="/dashboard/notification">
            Notification
          </Link>
          <Link className="mobileSidebar-router" to="/dashboard/editprofile">
            Edit Profile
          </Link>
          <Link className="mobileSidebar-router" to="/dashboard/certification">
            Certification
          </Link>
          <Link
            className="mobileSidebar-router"
            to="/dashboard/purchasehistory"
          >
            Purchase History
          </Link>
        </div>
        <div className="mobileSidebar-Row-Logout">
          <Link className="mobileSidebar-Logout" to="">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
