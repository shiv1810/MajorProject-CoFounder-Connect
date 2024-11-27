import React from 'react';
import { Calendar } from './Calendar';
import { QuickActions } from './QuickActions';
import { Community } from './Community';
import { ProjectsCard } from './ProjectsCard';
import { MatchesCard } from './MatchesCard';
import { AnalyticsChart } from './AnalyticsChart';

export function DashboardContent() {
  return (
    <div className="p-8">
      {/* Profile Card */}
      <div className="mb-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-8 flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
          alt="Jenny Jones"
          className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-emerald-500/20"
        />
        <h2 className="text-2xl font-bold">Jenny Jones</h2>
        <p className="text-gray-500">Entrepreneur</p>
      </div>

      {/* Grid of 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectsCard />
        <MatchesCard />
        <QuickActions />
        <Community />
      </div>

      {/* Calendar and Analytics in a row */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Calendar />
        <AnalyticsChart />
      </div>
    </div>
  );
}