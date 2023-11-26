import React from 'react';

interface ScoreboardProps {
  score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <div className="flex justify-center mt-10">
      <h2 className="text-2xl">Score: {score}</h2>
    </div>
  );
};

export default Scoreboard;