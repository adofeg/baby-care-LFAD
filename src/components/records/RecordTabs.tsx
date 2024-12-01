import React, { useState } from 'react';
import { FeedingTable } from './FeedingTable';
import { DiaperTable } from './DiaperTable';
import { SleepTable } from './SleepTable';
import { BathingTable } from './BathingTable';

export const RecordTabs = () => {
  const [activeTab, setActiveTab] = useState('feeding');

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="border-b">
        <nav className="flex space-x-4 p-4">
          {['feeding', 'diapers', 'sleep', 'bathing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4">
        {activeTab === 'feeding' && <FeedingTable />}
        {activeTab === 'diapers' && <DiaperTable />}
        {activeTab === 'sleep' && <SleepTable />}
        {activeTab === 'bathing' && <BathingTable />}
      </div>
    </div>
  );
};