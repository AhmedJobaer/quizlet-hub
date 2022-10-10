import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quizTopic = useLoaderData();
    console.log(quizTopic);
    return (
        <div>
            {

            }
        </div>
    );
};

export default Home;