import React from "react";
import "./Style/PageTitlebarStyle.scss";

export function PageTitlebar(props) {
  return (
    <div className="PageTitlebar">
      {props.emoji} {props.title}
    </div>
  );
}
