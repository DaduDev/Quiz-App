import React from "react";
import "./Block.css";

function Block({ src, title, description }) {
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
            <button className="button_left">Read More</button>
            <button className="button_right">Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block;
