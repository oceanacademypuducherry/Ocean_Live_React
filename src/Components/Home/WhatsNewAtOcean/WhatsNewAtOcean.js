import React, { useEffect } from "react";
import "./Style/WhatsNewAtOcean.css";
import Whats_New from "../../Image/whats_new.png";
import AOS from "aos";
import "aos/dist/aos.css";

export function WhatsNewAtOcean() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="whatsNewAtOcean">
      <h1
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        What's New at Ocean Academy
      </h1>
      <p
        data-aos="fade-left"
        data-aos-offset="100"
        // data-aos-easing="ease-in-sine"
      >
        We release a new platform innovation every month to stay on the leading
        edge of human transformation. Here's what's coming up next for
        Mindvalley All Access Members.
      </p>
      <div className="row">
        <div className="col">
          <h1
            data-aos="fade-right"
            data-aos-offset="100"
            // data-aos-easing="ease-in-sine"
          >
            Ocean Academy Launches Its Own Private Social Network for Learners
          </h1>
          <p
            data-aos="fade-right"
            data-aos-offset="100"
            // data-aos-easing="ease-in-sine"
          >
            Coming soon: our human to human matching engine will be able to
            introduce you to potential friends, partners and even dates with
            surprising accuracy.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="col"
        >
          <img src={Whats_New} alt="" />
        </div>
      </div>
    </div>
  );
}
