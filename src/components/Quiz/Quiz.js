import React from 'react';
import { Link } from 'react-router-dom';


const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{total} Quizzes</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/quizzes/${id}`} className="btn btn-primary">Start Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;