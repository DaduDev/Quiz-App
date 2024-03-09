import React from "react";
import "./Block.css";
import { useNavigate } from "react-router-dom";

function Block({ src, title, description, id }) {
  const navigate = useNavigate();
  const handleReadMore = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };
  const handlePlay = (quizId) => {
    navigate(`/quiz/${quizId}/play`);
  };
  return (
    <div className="all">
      <div className="block">
        <div className="block_left">
          <img src={src} alt="" />
        </div>
        <div className="block_right">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="buttons">
            <button className="button_right" onClick={() => handleReadMore(id)}>
              Read More
            </button>
            <button className="button_right" onClick={() => handlePlay(id)}>
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block;
