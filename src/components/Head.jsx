import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from '../components/Card.jsx';
import Model from '../components/Model.jsx'; // Adjust path as per your project structure

function Head() {
  const [showModal, setShowModal] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const addQuestion = (question) => {
    setQuestionsList([...questionsList, question]);
  };

  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="user-image flex items-center">
          <img 
            src="user-image-url" 
            alt="User" 
            className="w-10 h-10 rounded-full"
          />
        </div>

        <div className="search-box flex-grow mx-4">
          <input 
            type="text" 
            placeholder="Search Question..." 
            className="w-full p-2 rounded-md text-blue-600"
          />
        </div>

        <Button 
          variant="primary" 
          className="add-question bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleShow}
        >
          Add Question
        </Button>
      </header>

      <Model show={showModal} onClose={handleClose} addQuestion={addQuestion} />
      {questionsList.length > 0 && <Card questions={questionsList} />}
    </div>
  );
}

export default Head;
