import React from "react";
import "./Style/CoursesSidebarStyle.scss";
import { Link } from "react-router-dom";

export function CoursesSidebar({ purchasedCourse }) {
  return (
    <div className="CoursesSidebar">
      <h2>Enrolled Courses</h2>
      <div>
        {purchasedCourse.map((item, key) => {
          return (
            <Link
              key={key}
              className={`route `}
              to={"/dashboard/schedule/" + item.course.courseId}
            >
              {item.course.courseName}
            </Link>
          );
        })}
        {/* <Link className="route" to="/dashboard/zoom">
          Flask
        </Link>
        <Link className="route" to="/dashboard/zoom">
          Python
        </Link>
        <Link className="route" to="/dashboard/zoom">
          Java
        </Link> */}
      </div>
    </div>
  );
}
