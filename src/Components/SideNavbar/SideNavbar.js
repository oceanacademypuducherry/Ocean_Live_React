import React from "react";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import { isSelect } from "../Functions/MobileRouteDomActiveFunc";
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
import { Link, NavLink } from "react-router-dom";

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
          <NavLink style={isSelect} to="/" onClick={props.closeSideNavbar}>
            HOME
          </NavLink>
        </div>

        <div>
          <GoInfo className="sidenav-icons" />
          <NavLink
            style={isSelect}
            to="/aboutus"
            onClick={props.closeSideNavbar}
          >
            ABOUT US
          </NavLink>
        </div>

        <div>
          <GrServices className="sidenav-icons" />
          <NavLink
            style={isSelect}
            to="/services"
            onClick={props.closeSideNavbar}
          >
            SERVICES
          </NavLink>
        </div>

        <div id="mainCourses" onClick={openDropdown}>
          <span>
            <BsJournalBookmark className="sidenav-icons" />
          </span>
          <span>COURSES</span>
          <span>&#x25BC;</span>
        </div>

        <NavLink style={isSelect} id="course" to="/onlinecourses">
          <span>
            <HiOutlineStatusOnline />
          </span>
          <span>Online Courses</span>
        </NavLink>
        <NavLink style={isSelect} id="course" to="/offlinecourses">
          <span>
            <MdOutlineOfflinePin />
          </span>
          <span>Offline Courses</span>
        </NavLink>

        <div>
          <GrContact className="sidenav-icons" />
          <NavLink
            style={isSelect}
            to="/contactus"
            onClick={props.closeSideNavbar}
          >
            CONTACT US
          </NavLink>
        </div>

        <div>
          <GrAchievement className="sidenav-icons" />
          <NavLink
            style={isSelect}
            to="/career"
            onClick={props.closeSideNavbar}
          >
            CAREER
          </NavLink>
        </div>

        <div onClick={props.closeSideNavbar}>
          <AiOutlineLogin className="sidenav-icons" />
          <NavLink style={isSelect} to="/login">
            LOGIN
          </NavLink>
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
