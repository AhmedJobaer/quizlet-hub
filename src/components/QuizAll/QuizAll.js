import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizAll = () => {
    const quizData = useLoaderData();
    console.log(quizData.data.questions);
    return (
        <div>
            {
                quizData.data.questions.map(qs =>
                    <div key={qs.id}>
                        <h1>{qs.question}</h1>
                        {qs.options.map(op => <li>{op}</li>)} <br></br>
                    </div>

                )
            }
        </div>
    );
};

export default QuizAll;