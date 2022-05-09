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
            With the institute based in Puducherry, we provide an excellent
            infrastructure for trainees and our phenomenal training methods
            ensure a solid foundation of the programming knowledge. Training is
            conducted in batches. Job seekers and professionals who are up to
            enhance their skills can choose batches of flexible timings for
            their training.
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
            With the institute based in Puducherry, we provide an excellent
            infrastructure for trainees and our phenomenal training methods
            ensure a solid foundation of the programming knowledge. Training is
            conducted in batches. Job seekers and professionals who are up to
            enhance their skills can choose batches of flexible timings for
            their training.
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
            Recorded Video
          </h4>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            With the institute based in Puducherry, we provide an excellent
            infrastructure for trainees and our phenomenal training methods
            ensure a solid foundation of the programming knowledge. Training is
            conducted in batches. Job seekers and professionals who are up to
            enhance their skills can choose batches of flexible timings for
            their training.
          </p>
        </div>
      </div>
    </div>
  );
}
