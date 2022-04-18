import React from "react";
import { closeSideNavbar } from "../../Functions/SidebarFunction";
import "./Style/HomeLandingPage.scss";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { FloatingActionButton } from "../../FloatingActionButton/FloatingActionButton";
import { CoverImage } from "../CoverImage/CoverImage";
import { Journey } from "../Journey/Journey";
import { UpcomingCourses } from "../UpcomingCourses/UpcomingCourses";
import { StudentPlacement } from "../StudentPlacement/StudentPlacement";
import { Reviews } from "../../Home/Reviews/Reviews";
import { Clients } from "../Clients/Clients";
import { WhatsNewAtOcean } from "../WhatsNewAtOcean/WhatsNewAtOcean";
import { HowItWorks } from "../HowItWorks/HowItWorks";
import { Footer } from "../../Footer/Footer";
import { AppbarCombo } from "../../AppbarCombo/AppbarCombo";

export function HomeLandingPage() {
  return (
    <>
      <AppbarCombo />
      <SideNavbar />
      <FloatingActionButton />

      <div className="HomeLandingPage" onClick={closeSideNavbar}>
        <CoverImage />
        <Journey />
        <UpcomingCourses />
        <StudentPlacement />
        <Reviews />
        <Clients />
        <WhatsNewAtOcean />
        <HowItWorks />
      </div>
      <Footer />
    </>
  );
}
