import React from 'react';

function Card({ questions }) {
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="card mb-3 flex-1 ">
          <div className="card-body ml-3 rounded-lg mt-2 bg-gray-500 m-4">
            <h5 className="card-title text-white"><p className=' text-green-300'> Question No</p> {question.number}</h5>
            <h6 className="card-subtitle mb-2  text-white"><p className=' text-green-300'> Qn Name:</p> {question.name}</h6>
            <p className="card-text text-white"> <p className=' text-green-300'>Solution Approch:</p> {question.approach}</p>
          </div>
        </div>
      ))}
    </div>
  ); 
}

export default Card;
