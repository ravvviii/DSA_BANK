import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Model(props) {
  const [questionNumber, setQuestionNumber] = useState('');
  const [questionName, setQuestionName] = useState('');
  const [solutionApproach, setSolutionApproach] = useState('');

  const handleSave = () => {
    const newQuestion = {
      number: questionNumber,
      name: questionName,
      approach: solutionApproach,
    };

    // Update questionsList with new question
    props.addQuestion(newQuestion);

    // Close the modal
    handleClose();
  };

  const handleClose = () => {
    setQuestionNumber('');
    setQuestionName('');
    setSolutionApproach('');
    props.onClose(); // Call onClose function from parent component
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Form for adding question */}
        <form>
          <div className="mb-3">
            <label htmlFor="questionNumber">Leetcode Question Number:</label>
            <input 
              type="text" 
              className="form-control" 
              id="questionNumber" 
              value={questionNumber}
              onChange={(e) => setQuestionNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="questionName">Leetcode Question Name:</label>
            <input 
              type="text" 
              className="form-control" 
              id="questionName" 
              value={questionName}
              onChange={(e) => setQuestionName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="solutionApproach">Leetcode Solution Approach:</label>
            <textarea 
              className="form-control" 
              id="solutionApproach" 
              rows="4" 
              value={solutionApproach}
              onChange={(e) => setSolutionApproach(e.target.value)}
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Question
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Model;
