import React, { useState, useRef } from 'react';
import { Camera, Edit2 } from 'lucide-react';
import { UserProfile } from '../../types/profile';

interface ProfileHeaderProps {
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export function ProfileHeader({ profile, onUpdateProfile }: ProfileHeaderProps) {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bio, setBio] = useState(profile.bio);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const backgroundInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateProfile({ avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateProfile({ backgroundImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative mb-8">
      {/* Background Image */}
      <div className="relative h-64 overflow-hidden rounded-xl">
        <img
          src={profile.backgroundImage || 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809'}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => backgroundInputRef.current?.click()}
          className="absolute bottom-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <Camera className="w-5 h-5" />
        </button>
        <input
          ref={backgroundInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleBackgroundChange}
        />
      </div>

      {/* Profile Info */}
      <div className="absolute bottom-0 left-8 transform translate-y-1/2 flex items-end gap-6">
        <div className="relative">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
          <button
            onClick={() => avatarInputRef.current?.click()}
            className="absolute bottom-0 right-0 p-2 bg-emerald-500 rounded-full text-white hover:bg-emerald-600 transition-colors"
          >
            <Camera className="w-4 h-4" />
          </button>
          <input
            ref={avatarInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>
        
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.role}</p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-20 px-8">
        {isEditingBio ? (
          <div className="space-y-4">
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows={4}
            />
            <div className="flex gap-4">
              <button
                onClick={() => {
                  onUpdateProfile({ bio });
                  setIsEditingBio(false);
                }}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setBio(profile.bio);
                  setIsEditingBio(false);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="relative group">
            <p className="text-gray-700">{profile.bio}</p>
            <button
              onClick={() => setIsEditingBio(true)}
              className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Edit2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}