import React from "react";
import "./Style/WebinarMentorStyle.scss";
import webinarImage from "../../Image/webinar.jpg";

export function WebinarMentor() {
  return (
    <section className="webinarMentor">
      <p className="heading">About Mentor</p>

      <div className="row">
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          dignissimos voluptate voluptatem possimus voluptates atque dicta
          aperiam accusantium eius, magnam deserunt optio blanditiis praesentium
          quis odit autem? Cum, qui numquam? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Ad, quasi odio cupiditate laborum, velit
          quae quas possimus architecto eius tenetur ipsa nisi nemo ut fugit
          nulla, et cumque dolorum ipsum!
        </p>

        <div className="image">
          <img src={webinarImage} alt="" />
        </div>
      </div>
    </section>
  );
}
