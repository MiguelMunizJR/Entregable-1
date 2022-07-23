import React from "react";
import "./Button.css";

const Button = ({ onClickShuffle, randomColors }) => {
  const btnStyle = {
    color: randomColors,
  };

  return (
    <button className="card__btn" onClick={onClickShuffle}>
      <i className="fa-solid fa-shuffle" style={btnStyle}></i>
    </button>
  );
};

export default Button;
