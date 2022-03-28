import React from "react";
import { openSideNavbar } from "../Functions/SidebarFunction";
import { isSelect } from "../Functions/RouterDomActiveFunction";
import "./Style/AppbarStyle.scss";
import Logo from "../Image/logo.svg";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";

export function Appbar() {
  return (
    <div className="appbar">
      <div className="logoPortion">
        <img src={Logo} alt="" />
      </div>
      <div className="routingPortion">
        <NavLink style={isSelect} className="textDecoration" to="/">
          Home
        </NavLink>
        <NavLink style={isSelect} className="textDecoration" to="/aboutus">
          About Us
        </NavLink>
        <NavLink style={isSelect} className="textDecoration" to="/services">
          Services
        </NavLink>
        <div
          // style={isSelect}
          id="courses"
          className="textDecoration"
          // to="/onlinecourses"
        >
          Courses <span>&nbsp; &#x25BC;</span>
          <div>
            <Link className="dropDownItem" to="/onlinecourses">
              Online Courses
            </Link>
            <Link className="dropDownItem" to="/offlinecourses">
              Offline Courses
            </Link>
          </div>
        </div>
        <NavLink style={isSelect} className="textDecoration" to="/contactus">
          Contact Us
        </NavLink>
        <NavLink style={isSelect} className="textDecoration" to="/career">
          Career
        </NavLink>
        <Link to="/dashboard/mycourses/" className="loginBtn center">
          <span>Class Room</span>
        </Link>
        <Link to="/login" className="loginBtn center">
          <span>Login</span>
        </Link>
      </div>
      <div className="menuBtn" onClick={openSideNavbar}>
        <IoMenuOutline
          style={{
            fontSize: "30px",
            color: "white",
            backgroundColor: "rgb(32, 151, 243)",
            boxShadow: "2px 2px 20px 1px #2098f33b",
          }}
        />
      </div>
    </div>
  );
}
