import React from 'react';
import { Plus } from 'lucide-react';

export const FeedingTable = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Feeding Records</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} />
          Add Record
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ounces</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
              <td className="px-6 py-4 whitespace-nowrap">09:30 AM</td>
              <td className="px-6 py-4 whitespace-nowrap">4</td>
              <td className="px-6 py-4 whitespace-nowrap">Breast milk</td>
              <td className="px-6 py-4 whitespace-nowrap">Bottle</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};