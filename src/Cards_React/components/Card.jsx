import React from "react";

export default function Card({ img, name, email, bio }) {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img src={img} alt={name} />
        </div>
        <div className="card__info">
          <p className="card__name">{name}</p>
          <p className="card__email">{email}</p>
          <p className="card__bio">{bio}</p>
        </div>
      </div>
    </>
  );
}
