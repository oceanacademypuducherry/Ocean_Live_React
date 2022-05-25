import React, { useEffect } from "react";
import "./Style/HowItWorksStyle.css";
import offline from "./images/offline.jpg";
import online from "./images/online.jpg";
import recordedVideo from "./images/video.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export function HowItWorks() {
  useEffect(() => {
    AOS.init({
      // duration: 1000,
    });
  }, []);

  return (
    <div className="howItWorks">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        How It Works
      </h1>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        We provide training in both online and offline modes
      </p>
      <div className="row">
        <div className="col">
          <img
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className="col"
            src={online}
            alt=""
            width={400}
          />
          <h4
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            Online Training
          </h4>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            Long-distance learning is possible with our online training method.
            It is just as effective as conventional offline training but allows
            for more flexibility, easy access to resources, and equal trainer
            support. It is possible to conduct the training using a low-speed
            internet connection.
          </p>
        </div>
        <div className="col">
          <img
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className="col"
            src={offline}
            alt=""
            width={400}
          />
          <h4>Offline Classroom Training</h4>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            Our training takes place in batches at our Puducherry-based
            institute, and our phenomenal training methods offer a solid
            foundation of programming edge. We provide an excellent
            infrastructure for trainees, and our training methods provide a
            solid foundation of programming expertise. For job seekers and
            professionals looking to enhance their skills, batches of flexible
            training times are available.
          </p>
        </div>
        <div className="col">
          <img
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className="col"
            src={recordedVideo}
            alt=""
            width={400}
          />
          <h4
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            Video Course
          </h4>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            Our online video courses give best leverage to flexible learning in
            their own learning phase. Enrolled candidates can access the High
            quality pre-recorded courses from anywhere, anytime with their
            flexible time and phase.
          </p>
        </div>
      </div>
    </div>
  );
}
