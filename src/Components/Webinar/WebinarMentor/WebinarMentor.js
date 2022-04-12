import React, { useEffect } from "react";
import "./Style/WebinarMentorStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import webinarImage from "../../Image/webinar.jpg";

export function WebinarMentor({ mentor }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="webinarMentor">
      <p className="webinarHeading" data-aos="fade-up" data-aos-duration="1000">
        About Mentor
      </p>

      <div className="webinarMentorRow">
        <p data-aos="fade-up" data-aos-duration="1000">
          {mentor.aboutMentor}
        </p>

        <div className="webinarImage">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={mentor.mentorImage}
            alt="Not Found"
          />
        </div>
      </div>
    </section>
  );
}
