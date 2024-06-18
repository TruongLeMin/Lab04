import React from "react";
import Options from "./Options";

const Question = ({ question, selectedOption, onOptionChange, onSubmit, timer }) => {
    return (
        <div className="question-card p-4 shadow rounded">
            <h3 className="question-number text-secondary">Question {question.id}</h3>
            <h5 className="question-text mt-3">{question.question}</h5>
            <div className="timer text-danger my-3">
                <span>Time Remaining: {timer} seconds</span>
            </div>
            <form onSubmit={onSubmit} className="mt-3">
                <Options
                    options={question.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                />
                <button type="submit" className="btn btn-primary mt-3 w-100">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default Question;
