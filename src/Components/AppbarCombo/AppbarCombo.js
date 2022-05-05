import React, { useEffect, useState } from "react";
import { Appbar } from "../Appbar/Appbar";
import { WebinarAlert } from "../Webinar/WebinarAlert/WebinarAlert";
import axios from "../../index";

export function AppbarCombo() {
  const [webinarData, setWebinarData] = useState(null);
  function getWebinarData() {
    axios
      .get("/webinar/notification")
      .then((res) => {
        setWebinarData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  useEffect(() => {
    getWebinarData();
  }, []);
  return (
    <section className="appbar-Alert">
      {webinarData && <WebinarAlert />}
      <Appbar />
    </section>
  );
}
