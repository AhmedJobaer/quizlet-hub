import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizAll.css'


const QuizAll = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);
    const checkAnswer = (qs, op) => {
        console.log(op)
        console.log(qs.correctAnswer);
        if (qs.correctAnswer === op) {
            alert("correct");
        }
        else {
            alert("try again");
        }

    }

    return (
        <div>
            <h1 className='text-4xl ml-60'>Quiz For {quizData.data.name}</h1>
            {
                quizData.data.questions.map(qs =>
                    <div className="card w-3/4 bg-base-100 shadow-xl mx-auto my-10" key={qs.id}>
                        <h1 className='bg-fuchsia-200 p-10 text-2xl'>{qs.question.replace(/<\/?[^>]+>/gi, '')}</h1>
                        <p>{qs.correctAnswer}</p>
                        {qs.options.map(op =>
                            <div className='px-10'>
                                <li className='object-center hide'><label><input type="checkbox" onClick={() => checkAnswer(qs, op)} />{op}
                                </label> </li>
                            </div>
                        )} <br></br>
                    </div>)
            }
        </div>
    );
};

export default QuizAll;