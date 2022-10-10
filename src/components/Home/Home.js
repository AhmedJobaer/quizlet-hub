import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizTopic = useLoaderData();
    console.log(quizTopic.data);
    return (
        <div className='grid grid-cols-3 gap-4 m-24'>
            {
                quizTopic.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Home;