import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Block from "../Block/Block";
import { fetchAllQuizzes } from "../../../fetchQuiz";

const Recent = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await fetchAllQuizzes(); // Or fetchPaginatedQuizzes
      setQuizzes(data);
    };
    fetchQuizzes();
  }, []);
  return (
    <div>
      <Header />
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <Block
            src={quiz.Image}
            title={quiz.Title}
            description={quiz.Description}
          />
        </div>
      ))}
    </div>
  );
};

export default Recent;
