import React from "react";
import Header from "../../Header/Header";
import "./Create.css";

const Create = () => {
  return (
    <div>
      <Header />
      <div className="createQuiz">
        <h2>Name of the Quiz</h2>
        <input
          className="intpTag"
          type="text"
          placeholder="Enter your quiz name"
        />
        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default Create;
