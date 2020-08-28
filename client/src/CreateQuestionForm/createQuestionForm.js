import React from 'react';

import { handleSubmit, handleChange, renderAnswer } from './formFunctions'

function CreateQuestionForm (props) {
  
  const question = props.question;
  const setQuestion = props.setQuestion;
  const questionInitialState = props.questionInitialState;
  const handleQuestionSubmit = props.handleQuestionSubmit;
  
  return (
    <form className="question-builder" onSubmit={(event)=>handleSubmit(event, handleQuestionSubmit, setQuestion, question, questionInitialState)}>
      
      <h3>Question Information</h3>

      <div className="question-builder__input">
        <label>Question</label>
        <input
          type="text"
          name="question"
          value={question.question}
          onChange={(event, index)=>handleChange(event, index, setQuestion, question)}
        ></input>
      </div>

      <div className="question-builder__input">
        <label>Points</label>
        <input
          type="number"
          name="points"
          value={question.points}
          onChange={(event, index)=>handleChange(event, index, setQuestion, question)}
        ></input>
      </div>
      
      <h3>Answer Options</h3>
      {renderAnswer(question.questionType, setQuestion, question)}
      
      <div className="question-builder__input">
        <input type="submit" value="Create new Question" className="submit"></input>
      </div>
      <a href="/view-quizzes">I've added my last question... I'm done</a>
      <a href="/create-quiz">I'd like to make a new quiz</a>
    </form>
  )
}

export default CreateQuestionForm;