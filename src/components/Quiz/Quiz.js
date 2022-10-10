import React from 'react';


const Quiz = ({ quiz }) => {
    const { id, name, logo } = quiz;
    return (
        <div>
            <div className=''>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Start Quiz</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Quiz;