import React from "react";
import "./Style/StudentPlacementStyle.css";
import Amazon from "../../Image/company_images/amazon.png";
import Capgenini from "../../Image/company_images/capgemini.png";
import Cognizant from "../../Image/company_images/cognizant.png";
import Esale from "../../Image/company_images/esales.png";
import Google from "../../Image/company_images/google.png";
import Hcl from "../../Image/company_images/HCL.png";
import Hexaware from "../../Image/company_images/hexaware.png";
import Infosys from "../../Image/company_images/infosys.png";
import Lenovo from "../../Image/company_images/lenovo.png";
import Tcs from "../../Image/company_images/TCS.png";

export function StudentPlacement() {
  return (
    <div className="studentPlacement">
      <h1>Our Students Work At</h1>
      <p>
        We not only enlighten students with our knowledge but also help develop
        their career. Our students have grabbed placed in various firms and
        MNCs.
      </p>
      <div className="row">
        <img src={Tcs} alt="" />
        <img src={Google} alt="" />
        <img src={Amazon} alt="" />
        <img src={Capgenini} alt="" />
        <img src={Cognizant} alt="" />
        <img src={Hcl} alt="" />
        <img src={Infosys} alt="" />
        <img src={Lenovo} alt="" />
        <img src={Hexaware} alt="" />
        <img src={Esale} alt="" />
      </div>
    </div>
  );
}
