import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import { Link, useParams } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../../Footer/Footer";
import "./ReadMore.css";
import { fetchAllQuizzes } from "../../../fetchQuiz";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const ReadMore = () => {
  const { quizId } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [quizData, setQuizData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await fetchAllQuizzes();
      setQuizzes(data);
    };
    fetchQuizzes();
  }, []);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      setIsLoading(true);

      try {
        const docRef = doc(db, "quizzes", quizId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists) {
          // const quizData = { ...docSnap.data(), id: docSnap.id };
          setQuizData(docSnap);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizDetails();
  }, [quizId]);
  return (
    <div>
      <Header />
      {isLoading ? (
        <div className="circular-loader"></div>
      ) : (
        <div className="container">
          <div className="left">
            <img className="quizImg" src="" alt="quizImg" />
          </div>
          <div className="middleR">
            <h1>{quizData.Title}</h1>
            <span>{quizData.Author}</span>
            <p className="description">{quizData.Description}</p>
            <div>
              <button className="button_right">Play Now</button>
            </div>
          </div>
        </div>
      )}

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
  );
};

export default ReadMore;
