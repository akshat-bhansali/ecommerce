// import { Rating } from "@material-ui/lab";
import React from "react";
// import profilePng from "../../images/Profile.png";

import ReactStars from "react-rating-stars-component"

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src="https://www.freeiconspng.com/img/898" alt="User" />
      {/* <a href="https://www.freeiconspng.com/img/898">Png Save Profile</a> */}
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;