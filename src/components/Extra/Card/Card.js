import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ src, title, description, id }) {
  const navigate = useNavigate();
  const handleReadMore = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };
  return (
    <div className="card" onClick={() => handleReadMore(id)}>
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default Card;
