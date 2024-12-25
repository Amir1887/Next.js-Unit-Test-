"use client"
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Counter: {count}</h1>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => setCount(prev => prev + 1)}
        aria-label="increment"
      >
        Increment
      </button>
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(prev => prev - 1)}
        aria-label="decrement"
      >
        Decrement
      </button>
    </div>
  );
};