import React from 'react';

interface GameModeProps {
  onModeSelect: (mode: string) => void;
}

const GameMode: React.FC<GameModeProps> = ({ onModeSelect }) => {
  return (
    <div className="flex justify-center mt-10">
      <button onClick={() => onModeSelect('easy')} className="p-2 mx-2 bg-green-500 text-white rounded-md">Easy</button>
      <button onClick={() => onModeSelect('medium')} className="p-2 mx-2 bg-yellow-500 text-white rounded-md">Medium</button>
      <button onClick={() => onModeSelect('hard')} className="p-2 mx-2 bg-red-500 text-white rounded-md">Hard</button>
    </div>
  );
};

export default GameMode;