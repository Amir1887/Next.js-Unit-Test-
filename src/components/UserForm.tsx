"use client"
import { useState } from 'react';

interface User {
    name: string;
    email: string;
  }

export const UserForm = () => {
    const [user, setUser] = useState<User>({ name: '', email: '' });
    const [error, setError] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!user.name || !user.email) {
        setError('All fields are required');
        return;
      }
      setError('');
      // Handle form submission
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            id="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
            className="border p-2 w-full"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    );
  };