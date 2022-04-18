import React from "react";
import { Appbar } from "../Appbar/Appbar";
import { WebinarAlert } from "../Webinar/WebinarAlert/WebinarAlert";

export function AppbarCombo() {
  return (
    <section className="appbar-Alert">
      <WebinarAlert />
      <Appbar />
    </section>
  );
}
