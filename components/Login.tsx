import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border-2 border-gray-300 rounded-md"
      />
      <button type="submit" className="p-2 mt-4 bg-blue-500 text-white rounded-md">
        Login
      </button>
    </form>
  );
};

export default Login;