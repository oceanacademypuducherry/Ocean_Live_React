import React from "react";
import "./Style/Notification.scss";
import { LoggedInAppbar } from "../../LoggedInScreens/LoggedInAppbar/LoggedInAppbar";
import { IoIosArrowRoundBack } from "react-icons/io";
import OA from "../../Image/oa_logo.svg";

export function Notification() {
  return (
    <>
      <LoggedInAppbar />
      <div className="notification">
        <div className="notification-back-btn">
          <IoIosArrowRoundBack className="notification-back-icon" />
          Notification
        </div>

        {/* reuseable design */}
        <div className="notification-content">
          <img src={OA} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus ratione, quos quod quam eligendi iste, accusantium cum
            expedita modi consectetur temporibus, harum atque excepturi. Atque
            rem nemo itaque natus laboriosam.
          </p>
        </div>

        <div className="notification-content">
          <img src={OA} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus ratione, quos quod quam eligendi iste, accusantium cum
            expedita modi consectetur temporibus, harum atque excepturi. Atque
            rem nemo itaque natus laboriosam.
          </p>
        </div>

        <div className="notification-content">
          <img src={OA} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus ratione, quos quod quam eligendi iste, accusantium cum
            expedita modi consectetur temporibus, harum atque excepturi. Atque
            rem nemo itaque natus laboriosam.
          </p>
        </div>
      </div>
    </>
  );
}
