import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardContent } from './components/DashboardContent';
import { ProjectsPage } from './components/ProjectsPage';
import { ConnectionsPage } from './components/ConnectionsPage/ConnectionsPage';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import { PitchesPage } from './components/PitchesPage/PitchesPage';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'projects' | 'connections' | 'profile' | 'pitches'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="pt-20">
          {currentPage === 'dashboard' && <DashboardContent />}
          {currentPage === 'projects' && <ProjectsPage />}
          {currentPage === 'connections' && <ConnectionsPage />}
          {currentPage === 'profile' && <ProfilePage />}
          {currentPage === 'pitches' && <PitchesPage />}
        </main>
      </div>
    </div>
  );
}