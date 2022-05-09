import React, { useState } from "react";
import { openSideNavbar } from "../Functions/SidebarFunction";
import { isSelect } from "../Functions/RouterDomActiveFunction";
import "./Style/AppbarStyle.scss";
import Logo from "../Image/logo.svg";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink, Link, useNavigate } from "react-router-dom";

export function Appbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  function logoutLogin() {
    if (token) {
      localStorage.removeItem("token");
      setToken(undefined);
      navigate("/");
    } else {
      navigate("/login");
    }
  }
  return (
    <div className="appbar">
      <div className="logoPortion" onClick={() => navigate("/")}>
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
        {token && (
          <div
            onClick={() => navigate("/dashboard/mycourses/")}
            className="loginBtn center"
          >
            <span>Class Room</span>
          </div>
        )}
        <div onClick={logoutLogin} className="loginBtn center">
          {token ? <span>Logout</span> : <span>Login</span>}
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
