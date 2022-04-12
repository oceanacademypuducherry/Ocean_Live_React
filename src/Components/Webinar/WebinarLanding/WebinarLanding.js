import React, { useEffect, useState } from "react";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { WebinarForm } from "../WebinarForm/WebinarForm";
import { WebinarDetails } from "../WebinarDetails/WebinarDetails";
import { WebinarContent } from "../../Webinar/WebinarContent/WebinarContent";
import { WebinarMentor } from "../WebinarMentor/WebinarMentor";
import { Footer } from "../../Footer/Footer";
import "./Style/WebinarLandingStyle.scss";
import { useParams } from "react-router-dom";
import axios from "../../../index";

export function WebinarLanding() {
  const param = useParams();
  const [coutDown, setCounDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [webinarData, setWebinarData] = useState({
    _id: "6253c35a442597d84a7dd57f",
    title: "Web Development",
    subtitle: "trikes for web development",
    bannerImage:
      "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
    course: "React",
    enrolledCount: 100,
    duration: 60,
    isFree: true,
    isComplete: false,
    price: 0,
    topics: [
      {
        title: "",
        subtitle: "",
      },
      {
        title: "",
        subtitle: "",
      },
    ],
    startAt: "2022-04-20T00:00:00.000Z",
    mentor: {
      mentorName: "",
      designation: "",
      mentorImage: "",
      aboutMentor: "",
      mentorEmail: "",
      mobileNumber: "",
    },
  });
  function getWebinarData() {
    axios
      .get("/webinar/upcoming/" + param.webinarId)
      .then((res) => {
        console.log(res.data);
        setWebinarData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // ! working woth timer
  function timer() {
    let webinarDate = new Date("2022-04-20T00:00:00.000Z");

    var timestamp = webinarDate.getTime() - Date.now();

    timestamp /= 1000; // from ms to seconds

    function component(timestamp, calculate) {
      return Math.floor(timestamp / calculate);
    }

    setInterval(function () {
      // execute code each second
      timestamp--; // decrement timestamp with one second each second
      let days = component(timestamp, 24 * 60 * 60), // calculate days from timestamp
        hours = component(timestamp, 60 * 60) % 24, // hours
        minutes = component(timestamp, 60) % 60, // minutes
        seconds = component(timestamp, 1) % 60; // seconds
      setCounDown({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      }); // display: ;
    }, 1000);
  }

  useEffect(() => {
    getWebinarData();
    timer();
  }, [param.webinarId]);

  return (
    <>
      <Appbar />
      <SideNavbar />

      <section className="webinar-Landing">
        <WebinarForm
          title={webinarData.title}
          subtitle={webinarData.subtitle}
          startAt={webinarData.startAt}
          bannerImage={webinarData.bannerImage}
          mentorName={webinarData.mentor.mentorName}
          coutDown={coutDown}
        />
        <WebinarDetails webinarData={webinarData} />

        <WebinarContent topics={webinarData.topics} />
        <WebinarMentor mentor={webinarData.mentor} />
      </section>
      <Footer />
    </>
  );
}
