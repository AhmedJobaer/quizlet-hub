import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistic = () => {
    const quizzes = useLoaderData();
    return (
        <div>
            <h2 className='text-center text-4xl mt-4 mb-4 font-bold'>Hear you can see the statistics</h2>
            <div>
                <LineChart className='pl-60' width={600} height={400} data={quizzes.data}>
                    <Line type='monotone' dataKey='total' stroke='#82cacd'></Line>
                    <XAxis dataKey='name'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistic;