import React, { useState } from 'react';
import { MoreVertical, CheckCircle, Award } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  tasksRemaining: string;
  progress: number;
  collaborators: number;
  status: 'active' | 'completed' | 'achieved';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'A Sustainable Shopping Assistant',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    tasksRemaining: '12/37',
    progress: 75,
    collaborators: 4,
    status: 'active'
  },
  {
    id: 2,
    title: 'AI-Powered Health Tracker',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tasksRemaining: '8/45',
    progress: 85,
    collaborators: 5,
    status: 'completed'
  },
  {
    id: 3,
    title: 'Smart City Initiative',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800',
    tasksRemaining: '15/50',
    progress: 95,
    collaborators: 6,
    status: 'achieved'
  }
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'active' | 'completed' | 'achieved'>('active');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => project.status === activeFilter);

  const FilterButton = ({ status, icon: Icon }: { status: typeof activeFilter, icon?: React.ComponentType<any> }) => (
    <button
      onClick={() => setActiveFilter(status)}
      className={`px-6 py-2 rounded-full transition-all duration-200 flex items-center gap-2
        ${activeFilter === status 
          ? 'bg-emerald-500 text-white' 
          : 'bg-emerald-100/50 text-emerald-700 hover:bg-emerald-100'}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </button>
  );

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">My Projects</h1>
        <button className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
          New Project
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <FilterButton status="active" />
        <FilterButton status="completed" icon={CheckCircle} />
        <FilterButton status="achieved" icon={Award} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div 
            key={project.id}
            className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-all duration-200 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tasks Remaining:</span>
                  <span className="font-medium">{project.tasksRemaining}</span>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress:</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Collaborators:</span>
                  <span className="font-medium">{project.collaborators}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}