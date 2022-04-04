import React from "react";
import { Appbar } from "../../Appbar/Appbar";
import { SideNavbar } from "../../SideNavbar/SideNavbar";
import { WebinarForm } from "../WebinarForm/WebinarForm";
import { WebinarDetails } from "../WebinarDetails/WebinarDetails";
import { WebinarContent } from "../../Webinar/WebinarContent/WebinarContent";
import { WebinarMentor } from "../WebinarMentor/WebinarMentor";
import { Footer } from "../../Footer/Footer";
import "./Style/WebinarLandingStyle.scss";

export function WebinarLanding() {
  return (
    <>
      <Appbar />
      <SideNavbar />
      <section className="webinarLanding">
        <WebinarForm />
        <WebinarDetails />
        <WebinarContent />
        {/* <WebinarMentor /> */}
      </section>
      <Footer />
    </>
  );
}
