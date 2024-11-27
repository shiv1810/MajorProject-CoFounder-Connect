import React from 'react';
import { Zap } from 'lucide-react';

export function QuickActions() {
  const actions = [
    'Find New Project',
    'Join New Team',
    'Update Your Skills'
  ];

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Quick Actions</h3>
        <Zap className="w-8 h-8 text-emerald-500" />
      </div>
      <div className="space-y-2">
        {actions.map((action) => (
          <button
            key={action}
            className="w-full px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors text-sm"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}