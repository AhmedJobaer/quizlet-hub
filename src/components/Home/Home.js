import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizTopic = useLoaderData();
    //console.log(quizTopic.data);
    return (
        <div>
            <div className='flex items-center'>
                <div className=''>
                    <h1 className='text-6xl ml-5 md:ml-24 font-bold'>Make big subjects <br></br>
                        easier to digest <br></br> with
                        flashcards and
                        practice tests.</h1><br></br>
                    <p className='text-2xl md:ml-24 ml-5'>Join over 60 million students around the world using Quizlet's science-backed flashcards, practice tests and games to reach their goals at school, university and beyond.</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000" alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  md:m-24'>
                {
                    quizTopic.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;