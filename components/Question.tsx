import React from 'react';

export interface QuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswer, onAnswer }) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl">{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)} className="p-2 mt-2 bg-gray-200 rounded-md">
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;