import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    // console.log(`Click: ${getCurrentIndex}`);
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    // console.log(`Enter: ${getCurrentIndex}`);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    // console.log(`Leave: ${getCurrentIndex}`);
    setHover(rating);
  }

  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
}
