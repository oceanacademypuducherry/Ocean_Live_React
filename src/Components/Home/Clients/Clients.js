import React from "react";
import "./Style/Clients.css";
import Amazon from "../../Image/company_images/amazon.png";
import Capgenini from "../../Image/company_images/capgemini.png";
import Cts from "../../Image/company_images/CTS.png";
import Esale from "../../Image/company_images/esales.png";
import Google from "../../Image/company_images/google.png";
import Hcl from "../../Image/company_images/HCL.png";
import Hexaware from "../../Image/company_images/hexaware.png";
import Infosys from "../../Image/company_images/infosys.png";
// import Lenovo from "../../Image/company_images/lenovo.png";
import Tcs from "../../Image/company_images/TCS.png";

export function Clients() {
  return (
    <div className="clients">
      <h1>Our Clients</h1>
      <p>
        Various Educational Institutes and Universities prefer our pioneering
        training methods for their students.
      </p>
      <br />
      <div className="row">
        <img src={Amazon} alt="" />
        <img src={Capgenini} alt="" />
        <img src={Cts} alt="" />
        <img src={Esale} alt="" />
        <img src={Google} alt="" />
        <img src={Hcl} alt="" />
        <img src={Hexaware} alt="" />
        <img src={Infosys} alt="" />
        {/* <img src={Lenovo} width={80} alt="" /> */}
        <img src={Tcs} alt="" />
      </div>
    </div>
  );
}
