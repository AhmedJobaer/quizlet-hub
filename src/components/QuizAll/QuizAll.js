import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizAll = () => {
    const quizData = useLoaderData();
    console.log(quizData.data.questions);
    return (
        <div>
            <h2>This is Quiz all.</h2>
        </div>
    );
};

export default QuizAll;