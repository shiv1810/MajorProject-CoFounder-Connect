import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Pitch } from '../../types/pitch';

interface PitchCardProps {
  pitch: Pitch;
  onView: (pitch: Pitch) => void;
}

export function PitchCard({ pitch, onView }: PitchCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div 
        onClick={() => onView(pitch)}
        className="cursor-pointer"
      >
        {pitch.media.type === 'image' ? (
          <img
            src={pitch.media.url}
            alt={pitch.title}
            className="w-full h-64 object-cover"
          />
        ) : (
          <video
            src={pitch.media.url}
            className="w-full h-64 object-cover"
            controls
          />
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={pitch.author.avatar}
              alt={pitch.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{pitch.author.name}</h3>
              <p className="text-sm text-gray-500">{pitch.author.role}</p>
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-2">{pitch.title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{pitch.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {pitch.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-500 hover:text-emerald-500 transition-colors">
            <Heart className="w-5 h-5" />
            <span>{pitch.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-500 hover:text-emerald-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{pitch.comments}</span>
          </button>
        </div>
        <button className="text-gray-500 hover:text-emerald-500 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}