import React from 'react';

export function Community() {
  const items = [
    'Top 100 Posts',
    'Add New Story',
    'Personal Tasks',
    'Trends'
  ];

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6">
      <h3 className="text-xl font-bold mb-4">Community</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item}
            className="w-full px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors text-sm"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}