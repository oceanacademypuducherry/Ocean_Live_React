import React from "react";
import { openSideNavbar } from "../Functions/SidebarFunction";
import "./Style/AppbarStyle.scss";
import Logo from "../Image/logo.svg";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function Appbar(props) {
  return (
    <div className="appbar">
      <div className="logoPortion">
        <img src={Logo} alt="" />
      </div>
      <div className="routingPortion">
        <Link className="textDecoration" to="/">
          Home
        </Link>
        <Link className="textDecoration" to="/aboutus">
          About Us
        </Link>
        <Link className="textDecoration" to="/services">
          Services
        </Link>
        <div id="courses" className="textDecoration" to="/onlinecourses">
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
        <Link className="textDecoration" to="/contactus">
          Contact Us
        </Link>
        <Link className="textDecoration" to="/career">
          Career
        </Link>
        <div className="loginBtn center">
          <span>Login</span>
        </div>
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
