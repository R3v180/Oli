import React from 'react';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="flex justify-between p-4 bg-blue-500 text-white">
      <h1>Quiz Game</h1>
      <p>Welcome, {username}</p>
    </header>
  );
};

export default Header;