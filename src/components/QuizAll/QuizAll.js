import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom';
import './QuizAll.css'


const QuizAll = () => {
    const quizData = useLoaderData();

    console.log(quizData.data);
    const checkAnswer = (qs, op) => {
        console.log(op)
        console.log(qs.correctAnswer);
        if (qs.correctAnswer === op) {

            toast("Correct answer!");

        }
        else {
            toast("Wrong answer!");
        }

    }

    const seeAns = (ans) => {
        toast(ans);
    }

    return (
        <div>
            <h1 className='text-4xl ml-60'>Quiz For {quizData.data.name}</h1>
            {
                quizData.data.questions.map(qs =>
                    <div className="card w-3/4 bg-base-100 shadow-xl mx-auto my-10" key={qs.id}>
                        <h1 className='bg-fuchsia-200 p-10 text-2xl font-bold'> {qs.question.replace(/<\/?[^>]+>/gi, '')}
                            <FontAwesomeIcon icon={faEye} className="eye" onClick={() => seeAns(qs.correctAnswer)}></FontAwesomeIcon>
                        </h1>
                        {qs.options.map(op =>
                            <div className='px-10'>
                                <li className='hide'>
                                    <label><input type="checkbox" required onClick={() => checkAnswer(qs, op)} />
                                        {op}
                                    </label>
                                </li>
                            </div>
                        )} <br></br>
                    </div>)
            }
            <ToastContainer />
        </div>
    );
};

export default QuizAll;