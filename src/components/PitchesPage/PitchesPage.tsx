import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Pitch } from '../../types/pitch';
import { PitchCard } from './PitchCard';
import { PitchEditor } from './PitchEditor';

// Mock data
const initialPitches: Pitch[] = [
  {
    id: '1',
    title: 'AI-Powered Learning Platform',
    description: 'Revolutionizing education with personalized AI tutoring that adapts to each student\'s learning style and pace. Looking for technical co-founders and early adopters.',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
    },
    author: {
      id: '1',
      name: 'Jenny Jones',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      role: 'Entrepreneur'
    },
    tags: ['EdTech', 'AI', 'Education'],
    likes: 42,
    comments: 12,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Sustainable Fashion Marketplace',
    description: 'Building a platform to connect eco-conscious consumers with sustainable fashion brands. Seeking partnerships and investment.',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?auto=format&fit=crop&q=80&w=800'
    },
    author: {
      id: '2',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
      role: 'Fashion Tech Entrepreneur'
    },
    tags: ['Fashion', 'Sustainability', 'E-commerce'],
    likes: 38,
    comments: 8,
    createdAt: new Date().toISOString()
  }
];

export function PitchesPage() {
  const [pitches, setPitches] = useState<Pitch[]>(initialPitches);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPitch, setSelectedPitch] = useState<Pitch | null>(null);

  const handleSavePitch = (pitchData: {
    title: string;
    description: string;
    media: { type: 'image' | 'video'; url: string };
    tags: string[];
  }) => {
    const newPitch: Pitch = {
      id: Date.now().toString(),
      ...pitchData,
      author: {
        id: '1',
        name: 'Jenny Jones',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
        role: 'Entrepreneur'
      },
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString()
    };
    setPitches([newPitch, ...pitches]);
    setIsEditing(false);
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pitches</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          Create Pitch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pitches.map((pitch) => (
          <PitchCard
            key={pitch.id}
            pitch={pitch}
            onView={setSelectedPitch}
          />
        ))}
      </div>

      {isEditing && (
        <PitchEditor
          onSave={handleSavePitch}
          onClose={() => setIsEditing(false)}
        />
      )}

      {/* Placeholder for pitch details modal */}
      {selectedPitch && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full m-4">
            <h2 className="text-2xl font-bold mb-4">{selectedPitch.title}</h2>
            <button
              onClick={() => setSelectedPitch(null)}
              className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}