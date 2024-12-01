import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-8">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;