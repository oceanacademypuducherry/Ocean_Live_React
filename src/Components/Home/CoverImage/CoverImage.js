import React, { useEffect } from "react";
import "./Style/CoverImageStyle.css";
import CodingVideo from "../../Videos/coding.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
// import axios from "axios";

export function CoverImage() {
  useEffect(() => {
    AOS.init({
      // duration : "2s"
    });
  }, []);

  return (
    <div className="coverImg">
      <div className="bgClr">
        <div className="row">
          <div
            className="col"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1>
              Instil the passion for coding in you through our state-of-the-art
              training
            </h1>
            <p>
              Upskill yourself through practice-oriented training, learn
              in-demand skills, and expand your career opportunities.
            </p>
            <div className="enrollNowBtn">Enroll Now</div>
          </div>
          <div className="col">
            <video controls>
              <source src={CodingVideo} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
