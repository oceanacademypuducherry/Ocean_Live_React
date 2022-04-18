import React from "react";
import { AppbarCombo } from ".././AppbarCombo/AppbarCombo";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import "./Style/CareerStyle.scss";
import Team from "../Image/Carreer/team.png";

export function Career() {
  return (
    <>
      <SideNavbar />
      <AppbarCombo />
      <div onClick={closeSideNavbar} className="career">
        <div className="career-row">
          <div className="career-div-left">
            <p>We are Coming With Something</p>
            <h1>AMAZING</h1>
            <p>Subscribe And Stay Updated</p>
            <br /> <br />
            <div className="career-input-row">
              <input type="text" placeholder="Enter Your Email" />
              <div className="btn">Subscribe</div>
            </div>
          </div>

          <img id="career-div-right" src={Team} alt="" />
        </div>
        <div className="left-box"></div>
        <div className="fixed">
          <div className="right-sm"></div>
          <div className="right-lg"></div>
        </div>
      </div>
    </>
  );
}
