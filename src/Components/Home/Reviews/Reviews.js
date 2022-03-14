import React, { useEffect } from "react";
import { reviews } from "./StudentsData";
import "./Style/ReviewsStyle.scss";
import Quotes from "./quote-icon.svg";

export function Reviews() {
  useEffect(() => {
    let num = 0;
    let doc = document;
    let reviewsCard = doc.querySelectorAll(".reviews-Card");
    let dots = doc.querySelectorAll(".dot");
    console.log(dots);

    let timer = setInterval(() => {
      num++;
      if (num >= reviewsCard.length) {
        num = 0;
      }
      controller(num, reviewsCard, dots);
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let controller = (num, reviewsCard, dots) => {
    for (let i = 0; i < reviewsCard.length; i++) {
      if (num === i) {
        // reviewsCard[i].style.right = "0%";
        reviewsCard[i].style.display = "flex";
        dots[i].style.backgroundColor = "rgb(0, 72, 100)";
      } else {
        // reviewsCard[i].style.right = "100%";
        reviewsCard[i].style.display = "none";
        dots[i].style.backgroundColor = "transparent";
      }
    }
  };

  let dotOnClick = (e) => {
    // let doc = document;
    console.log(e.target.id, "events----");
  };

  return (
    <div className="reviews">
      <p>What our</p>
      <h1>Students are Saying</h1>
      <div className="reviews-Row">
        {reviews.map((data, index) => {
          return (
            <div className="reviews-Card" key={index}>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${data.profile})`,
                  width: "200px",
                }}
              ></div>
              <div className="para">
                <p>
                  <img width={40} src={Quotes} alt="" /> {data.studentReview}
                </p>
                <hr className="line" />
                <p>{data.name}</p>
                <p>{data.designation}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="reviews-Dots">
        <div className="dot" id="0" onClick={dotOnClick.bind(this)}></div>
        <div className="dot" id="1" onClick={dotOnClick.bind(this)}></div>
        <div className="dot" id="2" onClick={dotOnClick.bind(this)}></div>
        <div className="dot" id="3" onClick={dotOnClick.bind(this)}></div>
        <div className="dot" id="4" onClick={dotOnClick.bind(this)}></div>
      </div>
    </div>
  );
}
