import React, { useState } from "react";

import Card from "./Card.jsx";

import USERS_DATA from "../util/data.js";

export default function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentUser = USERS_DATA[currentIndex];

  function prevButton() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + USERS_DATA.length) % USERS_DATA.length
    );
  }

  function nextButton() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % USERS_DATA.length);
  }

  return (
    <>
      <div className="cards">
        <button onClick={prevButton}>Previous</button>
        {/* {USERS_DATA.map((user) => (
          <Card
            key={user.id}
            img={user.image}
            name={user.name}
            email={user.email}
            bio={user.bio}
          />
        ))} */}
        <Card
          key={currentUser.id}
          img={currentUser.image}
          name={currentUser.name}
          email={currentUser.email}
          bio={currentUser.bio}
        />
        <button onClick={nextButton}>Next</button>
      </div>
    </>
  );
}
