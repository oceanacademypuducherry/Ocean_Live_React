import React from "react";
import "./Style/TestingStyle.scss";

export function Test() {
  return (
    <>
      <div class="content"></div>
      <section>
        <video width="400" controls>
          <source src="mov_bbb.ogg" type="video/ogg" />
          Your browser does not support HTML video.
        </video>

        <div class="right"></div>
      </section>
      <div class="content"></div>
    </>
  );
}
