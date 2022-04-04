import React from "react";
import "./Style/WebinarDetailsStyle.scss";
import { IoIosPeople } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";

export function WebinarDetails() {
  return (
    <section className="webinarDetails">
      <section className="maxWidth">
        <section className="details">
          <div>
            <span>
              <IoIosPeople />
            </span>
            <span>103 +</span>
          </div>

          <p>Students Enrolled</p>
        </section>

        <section className="details">
          <div>
            <span>
              <BsClockHistory />
            </span>
            <span>180 Minutes</span>
          </div>

          <p>Master Class</p>
        </section>

        <section className="details">
          <div>
            <span>
              <GrCertificate />
            </span>
            <span>1000 +</span>
          </div>
          <p>Stories on ocean academy</p>
        </section>
      </section>
    </section>
  );
}
