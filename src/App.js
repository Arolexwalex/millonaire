import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Quiz from "./components/quiz";
import data from "./components/data";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stopTime, setStopTime] = useState(false);
  const [earned, setEarned] = useState("$0");

  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 400" },
    { id: 5, amount: "$ 500" },
    { id: 6, amount: "$ 1000" },
    { id: 7, amount: "$ 2000" },
    { id: 8, amount: "$ 3000" },
    { id: 9, amount: "$ 4000" },
    { id: 10, amount: "$ 8000" },
    { id: 11, amount: "$ 16000" },
    { id: 12, amount: "$ 32000" },
    { id: 13, amount: "$ 64000" },
    { id: 14, amount: "$ 125000" },
    { id: 15, amount: "$ 250000" },
    { id: 16, amount: "$ 500000" },
    { id: 17, amount: "$ 1000000" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);
  return (
    <div className="app">
      <div className="main">
        {stopTime ? (
          <h1 className="endText">You Won : {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setStopTime={setStopTime}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                />
              </div>
            </div>
            <div className="botom">
              <Quiz
                data={data}
                stopTime={stopTime}
                setStopTime={setStopTime}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
