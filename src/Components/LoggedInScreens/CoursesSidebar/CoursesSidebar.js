import React from "react";
import "./Style/CoursesSidebarStyle.scss";
import { Link } from "react-router-dom";

export function CoursesSidebar() {
  return (
    <div className="CoursesSidebar">
      <h2>Enrolled Courses</h2>
      <div>
        <Link className="route" to="/dashboard/zoom">
          Flask
        </Link>
        <Link className="route" to="/dashboard/zoom">
          Python
        </Link>
        <Link className="route" to="/dashboard/zoom">
          Java
        </Link>
      </div>
    </div>
  );
}
