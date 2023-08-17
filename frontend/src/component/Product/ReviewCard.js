import { Rating } from "@material-ui/lab";
import React from "react";
// import profilePng from "../../images/Profile.png";
import PersonIcon from '@mui/icons-material/Person';

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <PersonIcon/>
      {/* <a href="https://www.freeiconspng.com/img/898">Png Save Profile</a> */}
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;