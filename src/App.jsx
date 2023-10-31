import { useState } from "react";
import styles from "./App.module.css";
import { InitialScreen } from "./screens/initialScreen/InitialScreen";
import { QuizScreen } from "./screens/quizScreen/QuizScreen";
import { ReviewScreen } from "./screens/reviewScreen/ReviewScreen";
import {quizData} from './utils/quizData'

let ran1 =Math.round(Math.random()*20);
let ran2 =Math.round(Math.random()*16);
let ran3 =Math.round(Math.random()*20);
let ran4 =Math.round(Math.random()*10);
let ran5 =Math.round(Math.random()*11);

export default function App() {
  const [isShowQuiz, setIsShowQuiz] = useState(false);
  const [isRetakeQuiz, setIsRetakeQuiz] = useState(false);
  const [isReviewQuiz, setIsReviewQuiz] = useState(false);

  const handleStartQuiz = (isShowQuiz) => {
    setIsShowQuiz(isShowQuiz);
  };

  const handleRetakeQuiz = (isRetakeQuiz) => {
    setIsRetakeQuiz(isRetakeQuiz);
    setIsReviewQuiz(false);
    setIsShowQuiz(false);
  };

  const handleReviewQuiz = (isReviewQuiz) => {
    setIsReviewQuiz(isReviewQuiz);
  };


  let questions =[quizData.questions[ran1],quizData.questions[ran2],quizData.questions[ran3],quizData.questions[ran4],quizData.questions[ran5] ];

  return (
    <div className={styles.appWrapper}>
      {!isShowQuiz ? (
        <InitialScreen
          setStartQuiz={handleStartQuiz}
          isRetakeQuiz={isRetakeQuiz}
        />
      ) : isReviewQuiz ? (
        <ReviewScreen setIsRetake={handleRetakeQuiz} questions ={questions} />
      ) : (
        <QuizScreen
         questions ={questions}
          setIsRetake={handleRetakeQuiz}
          setIsReview={handleReviewQuiz}
        />
      )}
    </div>
  );
}
