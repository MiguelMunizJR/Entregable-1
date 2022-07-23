import React from "react";
import "./Card.css";

const Card = ({ randomQuotes, randomColors }) => {
  const styleCard = {
    color: randomColors
  };

  return (
    <div className="card__container" style={styleCard}>
      <i className="fa-solid fa-quote-left"></i>
      <div className="card__info">
        <h4 className="card__quote"> {randomQuotes.quote} </h4>
        <p className="card__author"> {randomQuotes.author} </p>
      </div>
    </div>
  );
};

export default Card;
