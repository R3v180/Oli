import React from 'react';

interface GameModeProps {
  onModeSelect: (mode: string) => void;
}

const GameMode: React.FC<GameModeProps> = ({ onModeSelect }) => {
  return (
    <div>
      <button onClick={() => onModeSelect('easy')}>Easy</button>
      <button onClick={() => onModeSelect('medium')}>Medium</button>
      <button onClick={() => onModeSelect('hard')}>Hard</button>
    </div>
  );
};

export default GameMode;