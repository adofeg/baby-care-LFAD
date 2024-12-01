import React from 'react';
import { Plus } from 'lucide-react';

export const ChildList = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Children</h2>
        <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          <Plus size={20} />
        </button>
      </div>
      <div className="space-y-2">
        {/* Sample child items */}
        <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
          <h3 className="font-medium">Emma Smith</h3>
          <p className="text-sm text-gray-600">6 months old</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
          <h3 className="font-medium">Lucas Johnson</h3>
          <p className="text-sm text-gray-600">2 months old</p>
        </div>
      </div>
    </div>
  );
};