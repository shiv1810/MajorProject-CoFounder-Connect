import React from 'react';
import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex items-center justify-between z-10">
      <button 
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex-1 max-w-xl mx-4">
        <input
          type="search"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <select className="bg-transparent focus:outline-none cursor-pointer">
          <option>ENG</option>
        </select>
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500"
          />
          <span className="font-medium">Jenny</span>
        </div>
      </div>
    </header>
  );
}