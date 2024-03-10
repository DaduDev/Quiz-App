import React, { useState, useEffect } from "react";
import "./Middle.css";
import Card from "../Extra/Card/Card";
import { Link } from "react-router-dom";
import { fetchAllQuizzes } from "../../fetchQuiz";

const Middle = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await fetchAllQuizzes(); // Or fetchPaginatedQuizzes
      setQuizzes(data);
      console.log(quizzes);
    };
    fetchQuizzes();
  }, [quizzes]);
  return (
    <div className="home">
      <div className="recent">
        <div className="view">
          <h1>Recent</h1>
          <Link to="/recent">View More</Link>
        </div>
        <div className="cards">
          {quizzes.map((quiz) => (
            <div key={quiz.id}>
              <Card
                src={quiz.Image}
                title={quiz.Title}
                description={quiz.Description}
                id={quiz.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="featured">
        <div className="view">
          <h1>Featured</h1>
          <Link to="/featured">View More</Link>
        </div>
        <div className="cards">
          {quizzes.map((quiz) => (
            <div key={quiz.id}>
              <Card
                src={quiz.Image}
                title={quiz.Title}
                description={quiz.Description}
                id={quiz.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Middle;
