import React from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../../Footer/Footer";
import "./ReadMore.css";

const ReadMore = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="left">
          <img
            className="quizImg"
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            alt="quizImg"
          />
        </div>
        <div className="middleR">
          <h1>Title of Quiz</h1>
          <span>By Author</span>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <div>
            <button className="button_right">Play Now</button>
          </div>
        </div>
      </div>
      <div className="more">
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
      </div>
      <Footer />
    </div>
  );
};

export default ReadMore;
