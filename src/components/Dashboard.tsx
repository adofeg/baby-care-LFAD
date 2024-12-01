import React from 'react';
import { ChildList } from './children/ChildList';
import { RecordTabs } from './records/RecordTabs';

export const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <ChildList />
        </div>
        <div className="lg:col-span-3">
          <RecordTabs />
        </div>
      </div>
    </div>
  );
};