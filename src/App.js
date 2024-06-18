import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuizApp";
import Score from "./Components/Score";
import "./App.css";

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);
    const [timer, setTimer] = useState(15); // Timer set to 15 seconds

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        } else {
            handleFormSubmit(); // Automatically submit the form when time runs out
        }
    }, [timer]);

    useEffect(() => {
        setTimer(15); // Reset the timer for each new question
    }, [currentQuestion]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFormSubmit = (e) => {
        if (e) e.preventDefault();
        checkAnswer();
        handleNextQuestion();
    };

    const checkAnswer = () => {
        if (selectedOption === qBank[currentQuestion].answer) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < qBank.length) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
            setSelectedOption("");
        } else {
            setQuizEnd(true);
        }
    };

    return (
        <div className="App d-flex flex-column align-items-center justify-content-center p-4">
            <h1 className="app-title text-primary mb-4">QUIZ</h1>
            {!quizEnd ? (
                <Question
                    question={qBank[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    onSubmit={handleFormSubmit}
                    timer={timer} // Pass the timer state to the Question component
                />
            ) : (
                <Score
                    score={score}
                />
            )}
        </div>
    );
};

export default App;
