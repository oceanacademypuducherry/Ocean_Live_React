import React from "react";
import "./Style/LoginStyle.scss";
import { Appbar } from "../Appbar/Appbar";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <Appbar />
      <SideNavbar />

      <div className="login">
        <div className="login-Card-Top">
          <h1>Welcome Back !</h1>
          <div className="login-Card-Top-Textfield">
            <input type="text" value="+91" />
            <input
              type="number"
              placeholder="Enter Your Mobile Number"
              value="9876543210"
            />
          </div>
          <div className="login-Card-Top-nextBtn">Next</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            quaerat autem labore nostrum reprehenderit voluptatibus explicabo .
          </p>
        </div>
        <div className="login-Card-Bottom">
          <p>
            Or&nbsp; <Link to=""> click here </Link>&nbsp; to visit website
          </p>
        </div>
        <div className="triangles">
          <div></div>
          <div></div>
        </div>
        <div className="circles">
          <div></div>
          <div></div>
        </div>
        <div className="rectangles">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
