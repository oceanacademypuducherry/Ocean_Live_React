import React, { useEffect } from "react";
import "./Style/CoverImageStyle.scss";
import CodingVideo from "../../Videos/coding.mp4";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export function CoverImage() {
  useEffect(() => {
    document.querySelector("#play").style.display = "none";
    AOS.init({
      // duration : "2s"
    });
  }, []);

  const play = (e) => {
    let play = document.querySelector("#play");
    let pause = document.querySelector("#pause");
    let video = document.querySelector("video");

    play.style.display = "none";
    pause.style.display = "block";
    video.play();
  };

  const pause = (e) => {
    let play = document.querySelector("#play");
    let pause = document.querySelector("#pause");
    let video = document.querySelector("video");

    play.style.display = "block";
    pause.style.display = "none";
    video.pause();
  };

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
            <div className="video">
              <div className="bg-Color">
                <span id="play">
                  <AiFillPlayCircle className="icon" onClick={play} />
                </span>
                <span id="pause">
                  <AiOutlinePauseCircle className="icon" onClick={pause} />
                </span>
              </div>
              <video
                controls={false}
                className="video"
                loop={true}
                autoPlay={true}
                muted={true}
              >
                <source src={CodingVideo} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
