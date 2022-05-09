import React from "react";
import "./Style/FloatingActionButton.scss";
import { Link } from "react-router-dom";
import { FaTerminal } from "react-icons/fa";

export function FloatingActionButton() {
  return (
    <a
      href={"https://oa-compiller.web.app/"}
      target="blank"
      className="floatingActionButton"
    >
      <FaTerminal className="icon" />
    </a>
  );
}
