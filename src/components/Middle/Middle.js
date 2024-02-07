import React from "react";
import "./Middle.css";
import Card from "../Extra/Card/Card";
import { Link } from "react-router-dom";

const Middle = () => {
  return (
    <div className="home">
      <div className="recent">
        <div className="view">
          <h1>Recent</h1>
          <Link to="/recent">View More</Link>
        </div>

        <div className="cards">
          <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
        </div>
      </div>
      <div className="featured">
        <div className="view">
          <h1>Featured</h1>
          <Link to="/featured">View More</Link>
        </div>
        <div className="cards">
          <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
        </div>
      </div>
    </div>
  );
};

export default Middle;
