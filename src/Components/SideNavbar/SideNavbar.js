import React from "react";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineOfflinePin } from "react-icons/md";
import "./Style/SideNavbar.scss";
import OA from "../Image/oa.svg";
import { GoHome } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import { GrServices, GrContact, GrAchievement } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

export function SideNavbar(props) {
  const openDropdown = () => {
    let doc = document;
    let list = doc.querySelectorAll("#sidenav > div > #course");
    for (const i in list) {
      if (list[i].style.display === "flex") {
        list[i].style.display = "none";
      } else {
        list[i].style.display = "flex";
      }
    }
  };
  return (
    <div id="sidenav" className="sideNavbar">
      <div>
        <img src={OA} alt="" />
      </div>
      <div>
        <div>
          <GoHome className="sidenav-icons" />
          <Link to="/" onClick={props.closeSideNavbar}>
            HOME
          </Link>
        </div>

        <div>
          <GoInfo className="sidenav-icons" />
          <Link to="/aboutus" onClick={props.closeSideNavbar}>
            ABOUT US
          </Link>
        </div>

        <div>
          <GrServices className="sidenav-icons" />
          <Link to="/services" onClick={props.closeSideNavbar}>
            SERVICES
          </Link>
        </div>

        <div id="mainCourses" onClick={openDropdown}>
          <span>
            <BsJournalBookmark className="sidenav-icons" />
          </span>
          <span>COURSES</span>
          <span>&#x25BC;</span>
        </div>

        <Link id="course" to="/onlinecourses">
          <span>
            <HiOutlineStatusOnline />
          </span>
          <span>Online Courses</span>
        </Link>
        <Link id="course" to="/offlinecourses">
          <span>
            <MdOutlineOfflinePin />
          </span>
          <span>Offline Courses</span>
        </Link>

        <div>
          <GrContact className="sidenav-icons" />
          <Link to="/contactus" onClick={props.closeSideNavbar}>
            CONTACT US
          </Link>
        </div>

        <div>
          <GrAchievement className="sidenav-icons" />
          <Link to="/career" onClick={props.closeSideNavbar}>
            CAREER
          </Link>
        </div>

        <div onClick={props.closeSideNavbar}>
          <AiOutlineLogin className="sidenav-icons" />
          <Link to="/login">LOGIN</Link>
        </div>
        <div className="sidebar-close">
          <IoIosCloseCircleOutline
            className="sidebarIcon"
            onClick={closeSideNavbar}
          />
        </div>
      </div>
    </div>
  );
}
