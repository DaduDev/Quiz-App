import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Quiz.css";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../../firebase";

const Quiz = () => {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
      const fetchQuiz = async () => {
        try {
          const docRef = doc(db, 'quizzes', quizId);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            setQuiz(docSnap.data());
          } else {
            console.error('Quiz not found');
          }
        } catch (error) {
          console.error('Error fetching quiz:', error);
        }
      };
  
      fetchQuiz();
    }, [quizId]);

    const handleNext = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if(currentQuestionIndex < quiz.Questions.length - 1) {
          setSelectedAnswer(null);
        } else {
          // Build the Result Page
          
        }
        const radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.checked = false);
    };

    const handlePrevious = () => {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const radios = document.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => radio.checked = false);
    };

    const handleOptionSelect = (index) => {
      setSelectedAnswer(index);
      if(selectedAnswer === quiz.Questions[currentQuestionIndex].Answer) {
        setScore(score + 1);
      }
    }

  return (
    <div>
      <Header />
      <div>
        {quiz ? (
          <div className="quiz-container">
            <div className="quizHead">
              <h1>{quiz.Title}</h1>
              <span>{currentQuestionIndex + 1}/{quiz.Questions.length}</span>
            </div>
            <div className="question-container">
              <h2>{quiz.Questions[currentQuestionIndex].Question}</h2>
              <div className="answers-container">
                {quiz.Questions[currentQuestionIndex].Options.map((Option, index) => (
                  <div key={index} className="answer">
                    <input
                      type="radio"
                      name="option"
                      value={index}
                      onChange={() => {handleOptionSelect(index)}}
                    />
                    <span>{Option}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="quizBtn">
              <button className="quizBtn1" style={{
                backgroundColor: "#e483f7",
                width: "75px",
              }} onClick={handlePrevious}>Previous</button>
              <button className="quizBtn1" style={{
                backgroundColor: "#97f7b1",
                width: "75px",
              }} onClick={handleNext}>Next</button>
            </div>
            
          </div>
        ) : (
          <div className="circular-loader"></div>
        )}
    </div>
      <Footer />
    </div>
  );
};

export default Quiz;
