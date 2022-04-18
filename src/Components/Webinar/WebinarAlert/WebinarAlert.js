import React from "react";
import { VscClose } from "react-icons/vsc";
import "./Style/WebinarStyle.scss";

export function WebinarAlert() {
  return (
    <section className="webinarAlert">
      <section className="center">
        <div className="time">
          <span>70</span>
          <span>:</span>
          <span>16</span>
          <span>:</span>
          <span>17</span>
          <span>:</span>
          <span>35</span>
        </div>

        <div className="courseTitle">
          <span>Auto Cad</span> value based webinar Now
        </div>

        <div className="join-Btn">Join</div>
        <div className="upcomimg-Btn">Upcoming</div>
      </section>
      <div className="close">
        <VscClose />
      </div>
    </section>
  );
}
