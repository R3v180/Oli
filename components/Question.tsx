import React from 'react';

export interface QuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswer, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;