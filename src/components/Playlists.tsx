import React from 'react';
import { Plus } from 'lucide-react';

export default function Playlists() {
  return (
    <div className="flex-1 bg-gradient-to-b from-green-900 to-black p-8 overflow-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Create Playlist</h1>
      
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gray-900/60 p-12 rounded-lg">
          <div className="inline-block p-6 rounded-full bg-gray-800 mb-6">
            <Plus size={48} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Create your first playlist</h2>
          <p className="text-gray-400 mb-8">It's easy, we'll help you</p>
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
            Create playlist
          </button>
        </div>
      </div>
    </div>
  );
}