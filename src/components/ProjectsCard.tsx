import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

export function ProjectsCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'FinTech Revolution',
      type: 'Finance',
      progress: 75,
      members: 4,
      deadline: '2024-04-15',
    },
    {
      id: 2,
      name: 'EduLearn Platform',
      type: 'EdTech',
      progress: 45,
      members: 3,
      deadline: '2024-05-01',
    },
    {
      id: 3,
      name: 'SaaS Analytics',
      type: 'SaaS',
      progress: 90,
      members: 5,
      deadline: '2024-03-30',
    }
  ];

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6 cursor-pointer hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-all duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-bold text-emerald-700">3</span>
          <p className="text-lg font-medium leading-tight">Active Projects & Pitches</p>
          <ChevronRight className="w-5 h-5 ml-auto text-emerald-600" />
        </div>
        <div className="flex flex-wrap gap-2">
          {['Finance', 'EdTech', 'SaaS', 'Commerce'].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Active Projects & Pitches</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Team Members:</span>
                        <span className="font-medium">{project.members}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Deadline:</span>
                        <span className="font-medium">{new Date(project.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors text-sm font-medium">
                        View Details
                      </button>
                      <button className="flex-1 px-4 py-2 border border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-50 transition-colors text-sm font-medium">
                        Team Chat
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 flex justify-end gap-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
                New Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}