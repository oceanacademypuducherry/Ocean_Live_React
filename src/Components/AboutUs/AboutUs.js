import React, { useState, useEffect } from "react";
import "./Style/AboutStyle.scss";
import { SideNavbar } from "../SideNavbar/SideNavbar";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import { Titlebar } from "../Titlebar/Titlebar";
import { Footer } from "../Footer/Footer";
import { OALoaders } from "../Loaders/OALoader/OALoader";
import Team from "../Image/team.png";
import axios from "../../index";
import { FiFacebook } from "react-icons/fi";
import { AppbarCombo } from "../AppbarCombo/AppbarCombo";
import {
  AiOutlineGooglePlus,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export function AboutUs() {
  const [allMentors, setAllMentors] = useState([]);
  const [bool, setBool] = useState(true);
  useEffect(() => {
    axios
      .get("/mentor/")
      .then((res) => {
        setAllMentors(res.data);
        setBool(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <SideNavbar />
      <AppbarCombo />
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
          {bool === true && (
            <section className="loading">
              <OALoaders />
            </section>
          )}
          <div className="row">
            {allMentors.map((mentor, index) => {
              return (
                <div key={index} className="static">
                  <div className="card">
                    <div className="front">
                      <div
                        className="background-Image"
                        style={{
                          backgroundImage: `url(${mentor.profilePicture})`,
                        }}
                      ></div>
                      <div className="details">
                        <p>{mentor.mentorName}</p>
                        <p>{mentor.designation}</p>
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
              );
            })}
            {/* 
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
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
