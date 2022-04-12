import React from "react";
import "./Style/WebinarDetailsStyle.scss";
import { IoIosPeople } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { RiMedalLine } from "react-icons/ri";

export function WebinarDetails({ webinarData }) {
  return (
    <section className="webinarDetails">
      <section className="maxWidth">
        <section className="details">
          <div>
            <span>
              <IoIosPeople />
            </span>
            <span>{webinarData.enrolledCount} +</span>
          </div>

          <p>Students Enrolled</p>
        </section>

        <section className="details">
          <div>
            <span>
              <BsClockHistory />
            </span>
            <span>{webinarData.duration} Minutes</span>
          </div>

          <p>Master Class</p>
        </section>

        <section className="details">
          <div>
            <span>
              <RiMedalLine />
            </span>
            <span>1000 +</span>
          </div>
          <p>Stories on ocean academy</p>
        </section>
      </section>
    </section>
  );
}
