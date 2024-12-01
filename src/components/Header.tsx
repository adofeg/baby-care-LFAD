import React from 'react';
import { Baby } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Baby size={32} />
          <h1 className="text-2xl font-bold">BabyTracker</h1>
        </div>
        <nav className="space-x-4">
          <button className="hover:text-blue-200 transition-colors">Dashboard</button>
          <button className="hover:text-blue-200 transition-colors">Profile</button>
        </nav>
      </div>
    </header>
  );
};