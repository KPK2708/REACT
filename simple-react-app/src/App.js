import logo from './logo.svg';
import './App.css';


import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold mb-4'>Simple React App</h1>
      <p className='text-lg mb-6'>This is a simple React application.</p>
      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Click Me</button>
    </div>
  );
};

export default App;
