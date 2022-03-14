import React from "react";
import "./Style/TitlebarStyle.scss";
import { closeSideNavbar } from "../Functions/SidebarFunction";
import OrangeCircle from "../Image/TopbarShapes/orange_circle.svg";
import OutlineCircle from "../Image/TopbarShapes/outline_circle.svg";
import Pink_V from "../Image/TopbarShapes/pink_v.svg";
import Green_V from "../Image/TopbarShapes/green_v.svg";
import Green_Circle from "../Image/TopbarShapes/green_circle.svg";

export function Titlebar(props) {
  return (
    <div className="titlebar" onClick={closeSideNavbar}>
      <img src={Green_Circle} alt="" id="greenCircle-Left" />
      <img src={Green_Circle} alt="" id="greenCircle-Right" />
      <img src={OrangeCircle} alt="" id="orangeCircle-Left" />
      <img src={OrangeCircle} alt="" id="orangeCircle-Right" />
      <img src={OutlineCircle} alt="" id="outlineCircle-Left" />
      <img src={OutlineCircle} alt="" id="outlineCircle-Right" />
      <img src={Green_V} alt="" id="greenV" />
      <img src={Pink_V} alt="" id="pinkV" />
      <h1>{props.title}</h1>
    </div>
  );
}
