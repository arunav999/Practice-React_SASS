import React from "react";

import Card from "./Card.jsx";

import USERS_DATA from "../util/data.js";

export default function Cards() {
  return (
    <>
      <div className="cards">
        {USERS_DATA.map((user) => (
          <Card
            key={user.id}
            img={user.image}
            name={user.name}
            email={user.email}
            bio={user.bio}
          />
        ))}
      </div>
    </>
  );
}
