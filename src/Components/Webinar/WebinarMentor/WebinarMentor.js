import React, { useEffect } from "react";
import "./Style/WebinarMentorStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import webinarImage from "../../Image/webinar.jpg";

export function WebinarMentor() {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          dignissimos voluptate voluptatem possimus voluptates atque dicta
          aperiam accusantium eius, magnam deserunt optio blanditiis praesentium
          quis odit autem? Cum, qui numquam? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Ad, quasi odio cupiditate laborum, velit
          quae quas possimus architecto eius tenetur ipsa nisi nemo ut fugit
          nulla, et cumque dolorum ipsum! quis odit autem? Cum, qui numquam?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, quasi
          odio cupiditate laborum, velit quae quas possimus architecto eius
          tenetur ipsa nisi nemo ut fugit nulla, et cumque dolorum ipsum.
        </p>

        <div className="webinarImage">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={webinarImage}
            alt="Not Found"
          />
        </div>
      </div>
    </section>
  );
}
