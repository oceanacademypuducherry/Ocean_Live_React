import React, { useEffect } from "react";
import "./Style/JourneyStyle.css";
import Certificate from "../../Image/certificate.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export function Journey() {
  useEffect(() => {
    AOS.init({
      // duration : "2s"
    });
  }, []);
  return (
    <div className="journey">
      <h1
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        Our Journey Through The Years
      </h1>
      <p
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        Througout the years since inception, we have bestowed upon students with
        our wisdom and, with the help of our trainers, initiated and
        successfully run various programmer to date
      </p>
      <div className="contentBox">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <img src={Certificate} alt="" width={70} />
          <h2>50+ Free seminars</h2>
          <p>
            Inspired by our way of teaching, many students from different states
            in India have attended our free workshops, which empowers us to
            advance our noble cause.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <img src={Certificate} alt="" width={70} />
          <h2>5500+ Students trained</h2>
          <p>
            As a prominent institude in Puducherry, we have successfully trained
            5500+ students and inculcated our knowledge and encouraged curiosity
            in them.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <img src={Certificate} alt="" width={70} />
          <h2>6 International Workshop</h2>
          <p>
            As a workshop conducted by Ocean Academy is in a class all by
            itself, we have conducted 6 International workshops and provided
            hands-on training for students.
          </p>
        </div>
      </div>
    </div>
  );
}
