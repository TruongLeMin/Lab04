import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

const Score = ({ score }) => {
    return (
        <div className="score-card p-4 shadow rounded text-center">
            <h1 className='text-success'>Quiz Completed!</h1>
            <h2>Results</h2>
            <h4>Your score: {score}</h4>
        </div>
    );
};

export default Score;
