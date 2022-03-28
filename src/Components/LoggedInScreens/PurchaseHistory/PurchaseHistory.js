import React, { useState, useEffect } from "react";
import "./Style/PurchaseHistoryStyle.scss";
import { LoggedInAppbar } from "../LoggedInAppbar/LoggedInAppbar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Python from "../../Image/python.png";
import { TiTick } from "react-icons/ti";
import Javascript from "../../Image/courses/Javascript.png";
import axios from "../../../index";

export function PurchaseHistory() {
  const [allPurchase, setAllPurchase] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const openContent = () => {
    let doc = document;
    let content = doc.querySelector(".content").style.display;

    content === "block"
      ? (doc.querySelector(".content").style.display = "none")
      : (doc.querySelector(".content").style.display = "block");
  };

  function getallPurchaseDetails() {
    const token = localStorage.getItem("token");
    axios
      .post("/purchased/", { token: token })
      .then((res) => {
        console.log(res.data);
        setAllPurchase(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getallPurchaseDetails();
  }, []);
  return (
    <>
      <LoggedInAppbar />
      <div className="purchaseHistory">
        <div className="purchaseHistory-Back-Btn">
          <IoIosArrowRoundBack className="purchaseHistory-Back-Icon" /> Edit
          Profile
        </div>

        <div className="purchaseHistory-table">
          <div className="purchaseHistory-Table-Heading">
            <h4>Thumbnail</h4>
            <h4>Course Name</h4>
            <h4>Purchased Date</h4>
            <h4>Total Amount</h4>
            <h4>Paid Via</h4>
            <h4>Status</h4>
          </div>

          {allPurchase.map((item, key) => {
            let date = new Date(item.purchasedDate);

            return (
              <div key={key} className="purchaseHistory-Table-Content">
                <h4>
                  <img src={item.course.courseImage} alt="" />
                </h4>
                <h4>{item.course.courseName}</h4>
                <h4>
                  {date.getDate()}/{months[date.getMonth()]}/
                  {date.getFullYear()}
                </h4>
                <h4>{item.course.price}</h4>
                <h4>Google Pay</h4>
                <h4>Completed</h4>
              </div>
            );
          })}

          {/* <div className="purchaseHistory-Table-Content">
            <h4>
              <img src={Python} alt="" />
            </h4>
            <h4>Python</h4>
            <h4>10/02/2022</h4>
            <h4>10000</h4>
            <h4>Google Pay</h4>
            <h4>Completed</h4>
          </div>

          <div className="purchaseHistory-Table-Content">
            <h4>
              <img src={Python} alt="" />
            </h4>
            <h4>Python</h4>
            <h4>10/02/2022</h4>
            <h4>10000</h4>
            <h4>Google Pay</h4>
            <h4>Completed</h4>
          </div>

          <div className="purchaseHistory-Table-Content">
            <h4>
              <img src={Python} alt="" />
            </h4>
            <h4>Python</h4>
            <h4>10/02/2022</h4>
            <h4>10000</h4>
            <h4>Google Pay</h4>
            <h4>Completed</h4>
          </div>

          <div className="purchaseHistory-Table-Content">
            <h4>
              <img src={Python} alt="" />
            </h4>
            <h4>Python</h4>
            <h4>10/02/2022</h4>
            <h4>10000</h4>
            <h4>Google Pay</h4>
            <h4>Completed</h4>
          </div> */}
        </div>
      </div>

      <div className="mobile-purchaseHistory">
        {allPurchase.map((item, key) => {
          let date = new Date(item.purchasedDate);
          return (
            <React.Fragment key={key}>
              <div onClick={openContent} className="mobile-card">
                <div className="row">
                  <img src={item.course.courseImage} width={60} alt="" />
                  <p>{item.course.courseName} </p>
                </div>
                <div className="icon-main">
                  <MdOutlineArrowDropDownCircle className="icon" />
                </div>
              </div>
              <div className="content">
                <div className="row">
                  <div className="col">
                    <h5>Course Name</h5>
                    <p>{item.course.courseName}</p>
                    <h5>Paid Via</h5>
                    <p>Debit Card</p>
                  </div>
                  <div className="col">
                    <h5>Purchased Date</h5>
                    <p>
                      {" "}
                      {date.getDate()}/{months[date.getMonth()]}/
                      {date.getFullYear()}
                    </p>
                    <h5>Status</h5>

                    <TiTick className="icon" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        {/* 
        <div onClick={openContent} className="mobile-card">
          <div className="row">
            <img src={Python} width={60} alt="" />
            <p>Python </p>
          </div>
          <div className="icon-main">
            <MdOutlineArrowDropDownCircle className="icon" />
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col">
              <h5>Course Name</h5>
              <p>Python</p>
              <h5>Paid Via</h5>
              <p>Debit Card</p>
            </div>
            <div className="col">
              <h5>Purchased Date</h5>
              <p>22/02/22</p>
              <h5>Status</h5>

              <TiTick className="icon" />
            </div>
          </div>
        </div>

        <div onClick={openContent} className="mobile-card">
          <div className="row">
            <img src={Python} width={60} alt="" />
            <p>Python </p>
          </div>
          <div className="icon-main">
            <MdOutlineArrowDropDownCircle className="icon" />
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col">
              <h5>Course Name</h5>
              <p>Python</p>
              <h5>Paid Via</h5>
              <p>Debit Card</p>
            </div>
            <div className="col">
              <h5>Purchased Date</h5>
              <p>22/02/22</p>
              <h5>Status</h5>

              <TiTick className="icon" />
            </div>
          </div>
        </div>

        <div onClick={openContent} className="mobile-card">
          <div className="row">
            <img src={Python} width={60} alt="" />
            <p>Python </p>
          </div>
          <div className="icon-main">
            <MdOutlineArrowDropDownCircle className="icon" />
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col">
              <h5>Course Name</h5>
              <p>Python</p>
              <h5>Paid Via</h5>
              <p>Debit Card</p>
            </div>
            <div className="col">
              <h5>Purchased Date</h5>
              <p>22/02/22</p>
              <h5>Status</h5>

              <TiTick className="icon" />
            </div>
          </div>
        </div>

        <div onClick={openContent} className="mobile-card">
          <div className="row">
            <img src={Python} width={60} alt="" />
            <p>Python </p>
          </div>
          <div className="icon-main">
            <MdOutlineArrowDropDownCircle className="icon" />
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col">
              <h5>Course Name</h5>
              <p>Python</p>
              <h5>Paid Via</h5>
              <p>Debit Card</p>
            </div>
            <div className="col">
              <h5>Purchased Date</h5>
              <p>22/02/22</p>
              <h5>Status</h5>

              <TiTick className="icon" />
            </div>
          </div>
        </div>

        <div onClick={openContent} className="mobile-card">
          <div className="row">
            <img src={Python} width={60} alt="" />
            <p>Python </p>
          </div>
          <div className="icon-main">
            <MdOutlineArrowDropDownCircle className="icon" />
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col">
              <h5>Course Name</h5>
              <p>Python</p>
              <h5>Paid Via</h5>
              <p>Debit Card</p>
            </div>
            <div className="col">
              <h5>Purchased Date</h5>
              <p>22/02/22</p>
              <h5>Status</h5>

              <TiTick className="icon" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
