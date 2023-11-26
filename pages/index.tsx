import React, { useState, useEffect } from 'react';
import Question, { QuestionProps } from '../components/Question';
import Scoreboard from '../components/Scoreboard';
import GameMode from '../components/GameMode';

interface QuestionData extends Omit<QuestionProps, 'onAnswer'> {}

const Home: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionData | null>(null);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState('easy');

  useEffect(() => {
    // Fetch questions from public/questions.json
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data[gameMode]));
  }, [gameMode]);

  const handleAnswer = (answer: string) => {
    if (currentQuestion && answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = questions.pop();
    setCurrentQuestion(nextQuestion ? nextQuestion : null);
  };

  const handleModeSelect = (mode: string) => {
    setGameMode(mode);
  };

  return (
    <div>
      <GameMode onModeSelect={handleModeSelect} />
      {currentQuestion && (
        <Question
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correctAnswer}
          onAnswer={handleAnswer}
        />
      )}
      <Scoreboard score={score} />
    </div>
  );
};

export default Home;