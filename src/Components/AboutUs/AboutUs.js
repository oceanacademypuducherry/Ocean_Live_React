import React from "react";
import "./Style/AboutStyle.scss";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import { Titlebar } from "../Titlebar/Titlebar";
import { Appbar } from "../Appbar/Appbar";
import { Footer } from "../Footer/Footer";
import Team from "../Image/team.png";
import Karthik from "../Image/Mentor/Karthik.jpg";
import Brindha from "../Image/Mentor/Brindha.jpg";
import Vijay from "../Image/Mentor/Vijay.jpg";
import Gomathi from "../Image/Mentor/Gomathi.jpg";
import Thamizharasan from "../Image/Mentor/Thamizharasan.jpg";
import Ijass from "../Image/Mentor/Ijass.jpg";
import Manisha from "../Image/Mentor/Manisha.jpg";
// import Jaya from "../Image/Mentor/Jayalatha.jpg";

import { FiFacebook } from "react-icons/fi";
import {
  AiOutlineGooglePlus,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export function AboutUs() {
  return (
    <>
      <SideNavbar />
      <Appbar />
      <Titlebar title="ABOUT US" />
      <div className="about" onClick={closeSideNavbar}>
        <div className="content">
          <div className="left-content">
            <h2>About us Ocean Academy</h2>
            <p>
              Computer technology and consultancy firm Ocean Academy, a leading
              name in the area of IT education, software production and IT
              services, has graduated more than 5,000 students. The Ocean
              Academy was built from the outset on the concept of constructing
              and introducing brilliant innovations that generate change for
              students and customers. It's the only location where excellence
              and technology intersect. In numerous fields, we have allowed
              digital technologies and are still enabling and fostering the
              latest technology among students and clients. Students and their
              lives are also enhancing the quality of learning. We understand
              the value of the interests of students and consumers and therefore
              satisfy them with the highest level of service. Improving
              students' readiness to accept emerging technologies and therefore
              their ability to go beyond it. We engage in the growth of experts
              who trust about themselves and are trained with the recent
              advancements in their particular fields, experts who are competent
              and willing to succeed in a demanding environment. In 2010, we
              officially launched our creation of IT trail. It is an entity with
              a certification of 9001:2008 which will continue to aspire and
              seek to be creative on all the areas. We are working into a core
              of excellence to enhance the level of learning and science.
            </p>
          </div>
          <div className="right-content">
            <img src={Team} alt="" />
          </div>
        </div>

        <div className="mentors">
          <h2>MEET OUR MENTOR</h2>
          <div className="row">
            <div className="static">
              <div className="card">
                <div className="front">
                  <div
                    className="background-Image"
                    style={{ backgroundImage: `url(${Karthik})` }}
                  ></div>
                  <div className="details">
                    <p>Karthick Balaraman</p>
                    <p>CEO, Managing Director</p>
                  </div>
                </div>
                <div className="back">
                  <FiFacebook className="card-Icons" />

                  <AiOutlineGooglePlus className="card-Icons" />

                  <AiFillLinkedin className="card-Icons" />

                  <AiOutlineTwitter className="card-Icons" />
                </div>
              </div>
            </div>

            <div className="static">
              <div className="card">
                <div className="front">
                  <div
                    className="background-Image"
                    style={{ backgroundImage: `url(${Brindha})` }}
                  ></div>
                  <div className="details">
                    <p>Brindha Karthick</p>
                    <p>Technical Lead</p>
                  </div>
                </div>
                <div className="back">
                  <FiFacebook className="card-Icons" />

                  <AiOutlineGooglePlus className="card-Icons" />

                  <AiFillLinkedin className="card-Icons" />

                  <AiOutlineTwitter className="card-Icons" />
                </div>
              </div>
            </div>

            <div className="static">
              <div className="card">
                <div className="front">
                  <div
                    className="background-Image"
                    style={{ backgroundImage: `url(${Vijay})` }}
                  ></div>
                  <div className="details">
                    <p>Vijay Kumar</p>
                    <p>Team leader / Senior Trainer</p>
                  </div>
                </div>
                <div className="back">
                  <FiFacebook className="card-Icons" />

                  <AiOutlineGooglePlus className="card-Icons" />

                  <AiFillLinkedin className="card-Icons" />

                  <AiOutlineTwitter className="card-Icons" />
                </div>
              </div>
            </div>

            <div className="static">
              <div className="card">
                <div className="front">
                  <div
                    className="background-Image"
                    style={{ backgroundImage: `url(${Gomathi})` }}
                  ></div>
                  <div className="details">
                    <p>Gomathi</p>
                    <p>Developer / Trainer</p>
                  </div>
                </div>
                <div className="back">
                  <FiFacebook className="card-Icons" />

                  <AiOutlineGooglePlus className="card-Icons" />

                  <AiFillLinkedin className="card-Icons" />

                  <AiOutlineTwitter className="card-Icons" />
                </div>
              </div>
            </div>

            <div className="static">
              <div className="card">
                <div className="front">
                  <div
                    className="background-Image"
                    style={{ backgroundImage: `url(${Thamizharasan})` }}
                  ></div>
                  <div className="details">
                    <p>Thamizharasan</p>
                    <p>Developer / Trainer</p>
                  </div>
                </div>
                <div className="back">
                  <FiFacebook className="card-Icons" />

                  <AiOutlineGooglePlus className="card-Icons" />

                  <AiFillLinkedin className="card-Icons" />

                  <AiOutlineTwitter className="card-Icons" />
                </div>
              </div>
            </div>

            <div className="static">
              <div className="card">
                <div className="front">
                  <div
                    className="background-Image"
                    style={{ backgroundImage: `url(${Ijass})` }}
                  ></div>
                  <div className="details">
                    <p>Mohamed Ijass</p>
                    <p>Developer / Trainer</p>
                  </div>
                </div>
                <div className="back">
                  <FiFacebook className="card-Icons" />

                  <AiOutlineGooglePlus className="card-Icons" />

                  <AiFillLinkedin className="card-Icons" />

                  <AiOutlineTwitter className="card-Icons" />
                </div>
              </div>
            </div>

            <div className="static">
              <div className="card">
                <div className="front">
                  <div
                    className="background-Image"
                    style={{ backgroundImage: `url(${Manisha})` }}
                  ></div>
                  <div className="details">
                    <p>Manisha</p>
                    <p>Admin</p>
                  </div>
                </div>
                <div className="back">
                  <FiFacebook className="card-Icons" />

                  <AiOutlineGooglePlus className="card-Icons" />

                  <AiFillLinkedin className="card-Icons" />

                  <AiOutlineTwitter className="card-Icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
