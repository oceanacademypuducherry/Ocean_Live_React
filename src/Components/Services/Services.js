import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style/ServicesStyle.scss";
import { Titlebar } from "../Titlebar/Titlebar";
import { Footer } from "../Footer/Footer";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import { AppbarCombo } from "../AppbarCombo/AppbarCombo";
import Image from "../Image/team.png";
import careerOriented from "../Image/services_svg/career_oriented.svg";
import corporateTraining from "../Image/services_svg/corporate_training.svg";
import learnNewSkill from "../Image/services_svg/learn_new_skill.svg";
import workshopsAndValue from "../Image/services_svg/workshops_and_value.svg";

export function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <AppbarCombo />
      <SideNavbar />
      <Titlebar title="SERVICES" />
      <div className="services" onClick={closeSideNavbar}>
        <h1>OUR SERVICES</h1>
        <div className="row">
          <div className="card">
            <img src={Image} width={200} alt="" />
            <h3>On-Campus training</h3>
            <p>
              We offer on-campus learning for students of various Universities
              and Colleges and help facilitate knowledge and develop their
              career.
            </p>
          </div>

          <div className="card">
            <img src={Image} width={200} alt="" />
            <h3>Software development</h3>
            <p>
              We offer various software development services such as designing,
              planning, and testing and also provide maintenance.
            </p>
          </div>

          <div className="card">
            <img src={Image} width={200} alt="" />
            <h3>Technical Workshops (Implant training)</h3>
            <p>
              We devise and plan workshops targeted towards the practical needs
              of students and exploring new nuances in IT technology.
            </p>
          </div>

          <div className="card">
            <img src={Image} width={200} alt="" />
            <h3>IT consulting</h3>
            <p>
              We provide data analysis services to companies, manage their data
              and infrastructure, and guide them according to their goals and
              needs using our technologies.
            </p>
          </div>

          <div className="card">
            <img src={Image} width={200} alt="" />
            <h3>Free Webinars</h3>
            <p>
              The easiest way to host a webinar for free is to use a live
              streaming platform like Facebook Live or YouTube Live. The
              benefits include easy use, nearly unlimited participant counts,
              and simple event marketing
            </p>
          </div>

          <div className="card">
            <img src={Image} width={200} alt="" />
            <h3>Free Webinars</h3>
            <p>
              The easiest way to host a webinar for free is to use a live
              streaming platform like Facebook Live or YouTube Live. The
              benefits include easy use, nearly unlimited participant counts,
              and simple event marketing
            </p>
          </div>
        </div>

        <div className="description-row">
          <img data-aos="fade-up-right" src={corporateTraining} alt="" />
          <div data-aos="fade-left">
            <h3>Hone your skills with Corporate Training</h3>
            <p>
              Corporate Training enables a professional or a skilled jobseeker
              to improve upon their current skills in areas of expertise
              required. Ocean Academy provides a professional work place
              experience and helps equip trainees with the expectations of the
              corporate world.
            </p>
          </div>
        </div>

        <div className="description-row">
          <div data-aos="fade-right" id="description">
            <h3>Start a new career with Career-oriented courses</h3>
            <p>
              Start learning new technologies from scratch and build a solid
              foundation for your career. Career courses offered by Ocean
              Academy-a golden opportunity for graduate students - covers the
              basics of the course up to the level of expertise required.
            </p>
          </div>
          <img data-aos="fade-up-left" id="img" src={careerOriented} alt="" />
        </div>

        <div className="description-row">
          <img data-aos="fade-up-right" src={workshopsAndValue} alt="" />
          <div data-aos="fade-left">
            <h3>
              Experience latest technologies through Workshops & Value-added
              Courses
            </h3>
            <p>
              Workshops are a great means to learn new innovations by further
              investigation on your own or through the actual methods encouraged
              by us in a short stretch of time.
            </p>
          </div>
        </div>

        <div className="description-row">
          <div data-aos="fade-right" id="description">
            <h3>Learn new skills through Software training</h3>
            <p>
              Software training provides the knowledge of technologies that you
              deem to be necessary for your career or education. This enables
              learning new product features and ad hoc functions of a known
              application, improves productivity, and facilitates one to work
              more independently.
            </p>
          </div>
          <img data-aos="fade-up-left" id="img" src={learnNewSkill} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
