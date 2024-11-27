import React from 'react';

export function MatchesCard() {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-5xl font-bold text-emerald-700">5</span>
        <p className="text-lg font-medium leading-tight">Recommended Matches</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {['Co-Founder', 'Mentor', 'Investor', 'Collaborator'].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}