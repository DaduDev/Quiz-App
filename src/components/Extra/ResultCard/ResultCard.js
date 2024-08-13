import React, { useState, useEffect } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { useLocation } from 'react-router-dom'
import "./ResultCard.css"
import { fetchAllQuizzes } from "../../../fetchQuiz";
import { Link } from "react-router-dom";
import Card from "../Card/Card";



const ResultCard = () => {
    const location = useLocation();
    const { score } = location.state;
    const [quizzes, setQuizzes] = useState([]);


    function getColor(score) {
        if (score < 5) {
          return '#f44336'; 
        } else if (score < 7) {
          return '#ff9800'; 
        } else {
          return '#4caf50';
        }
      }

      useEffect(() => {
        const fetchQuizzes = async () => {
          const data = await fetchAllQuizzes();
          setQuizzes(data);
        };
        fetchQuizzes();
      }, []);

    return (
        <div>
            <Header />
            <div className='scoreCard'>
                <h1>Quiz Summary</h1>
                <div className="animation" style={{ backgroundColor: getColor(score) }}></div> 
                <p>Your Score: <span>{score}</span></p>
            </div>
            <div className="more">
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
            </div>
            <Footer />
        </div>
    )
}

export default ResultCard