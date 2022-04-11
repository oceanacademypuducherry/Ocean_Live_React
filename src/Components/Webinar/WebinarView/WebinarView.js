import React from "react";
import "./Style/WebinarViewStyle.scss";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import Triangle from "../../Image/triangle.svg";
import avatarCircle from "../../Image/avatarCircle.svg";
import { BsCalendar2Check } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import thamizh from "../../Image/Mentor/Thamizharasan.jpg";

export function WebinarView() {
  return (
    <>
      <Appbar />
      <SideNavbar />
      <section className="WebinarView">
        <section className="WebinarView-Card">
          <br /> <br />
          <section className="top">
            <div className="image">
              <img
                className="avatarCircle"
                width={150}
                src={avatarCircle}
                alt=""
              />
              <div
                className="profile"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                }}
                alt=""
              />
            </div>
            <div className="description">
              <p className="name">thamizharasan</p>
              <p className="designation">Software Developer</p>
            </div>
            <div className="WebinarView-Row">
              <div className="dateAndTime">
                <p>
                  <span>
                    <BsCalendar2Check />
                  </span>
                  <span>07 Jun 2022</span>
                </p>
                <p>
                  <span>
                    <CgSandClock />
                  </span>
                  <span>12:00 PM</span>
                </p>
              </div>
              <svg className="divider" viewBox="0 0 6 106">
                <path d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM3 105.887L5.88675 103L3 100.113L0.113244 103L3 105.887ZM2.5 3L2.5 103L3.5 103L3.5 3L2.5 3Z" />
              </svg>

              <p className="price">Free</p>
            </div>
          </section>
          <section className="bottom">
            <p className="topic">auto cad</p>
            <div className="btn">
              <span>REGISTER</span>
            </div>
          </section>
          <div className="circle"></div>
          <div className="square"></div>
          <svg className="triangle" viewBox="0 0 20 20">
            <path d="M1.42635 14.95L10 0.100001L18.5737 14.95H1.42635Z" />
          </svg>
        </section>

        <section className="WebinarView-Card">
          <br /> <br />
          <section className="top">
            <div className="image">
              <img
                className="avatarCircle"
                width={150}
                src={avatarCircle}
                alt=""
              />
              <div
                className="profile"
                style={{
                  backgroundImage: `url(https://imgk.timesnownews.com/D_OIh2jWwAEGDfb_1562913538__rend_4_3.jpg?tr=w-600)`,
                }}
                alt=""
              />
            </div>
            <div className="description">
              <p className="name">thamizharasan</p>
              <p className="designation">Software Developer</p>
            </div>
            <div className="WebinarView-Row">
              <div className="dateAndTime">
                <p>
                  <span>
                    <BsCalendar2Check />
                  </span>
                  <span>07 Jun 2022</span>
                </p>
                <p>
                  <span>
                    <CgSandClock />
                  </span>
                  <span>12:00 PM</span>
                </p>
              </div>
              <svg className="divider" viewBox="0 0 6 106">
                <path d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM3 105.887L5.88675 103L3 100.113L0.113244 103L3 105.887ZM2.5 3L2.5 103L3.5 103L3.5 3L2.5 3Z" />
              </svg>

              <p className="price">$ 100</p>
            </div>
          </section>
          <section className="bottom">
            <p className="topic">auto cad</p>
            <div className="btn">
              <span>REGISTER</span>
            </div>
          </section>
          <div className="circle"></div>
          <div className="square"></div>
          <svg className="triangle" viewBox="0 0 20 20">
            <path d="M1.42635 14.95L10 0.100001L18.5737 14.95H1.42635Z" />
          </svg>
        </section>

        <section className="WebinarView-Card">
          <br /> <br />
          <section className="top">
            <div className="image">
              <img
                className="avatarCircle"
                width={150}
                src={avatarCircle}
                alt=""
              />
              <div
                className="profile"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                }}
                alt=""
              />
            </div>
            <div className="description">
              <p className="name">thamizharasan</p>
              <p className="designation">Software Developer</p>
            </div>
            <div className="WebinarView-Row">
              <div className="dateAndTime">
                <p>
                  <span>
                    <BsCalendar2Check />
                  </span>
                  <span>07 Jun 2022</span>
                </p>
                <p>
                  <span>
                    <CgSandClock />
                  </span>
                  <span>12:00 PM</span>
                </p>
              </div>
              <svg className="divider" viewBox="0 0 6 106">
                <path d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM3 105.887L5.88675 103L3 100.113L0.113244 103L3 105.887ZM2.5 3L2.5 103L3.5 103L3.5 3L2.5 3Z" />
              </svg>

              <p className="price">$ 1000</p>
            </div>
          </section>
          <section className="bottom">
            <p className="topic">auto cad</p>
            <div className="btn">
              <span>REGISTER</span>
            </div>
          </section>
          <div className="circle"></div>
          <div className="square"></div>
          <svg className="triangle" viewBox="0 0 20 20">
            <path d="M1.42635 14.95L10 0.100001L18.5737 14.95H1.42635Z" />
          </svg>
        </section>
      </section>
    </>
  );
}
