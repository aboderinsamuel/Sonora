import React from 'react';
import { Clock } from 'lucide-react';

export default function Library() {
  const recentlyPlayed = [
    { id: 1, name: 'Daily Mix 1', type: 'Playlist', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: 2, name: 'Discover Weekly', type: 'Playlist', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: 3, name: 'Release Radar', type: 'Playlist', image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-black p-8 overflow-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Your Library</h1>
        <button className="text-gray-400 hover:text-white">
          <Clock size={24} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentlyPlayed.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900/60 p-4 rounded-lg hover:bg-gray-900/80 transition cursor-pointer group"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full aspect-square object-cover rounded-md mb-4"
            />
            <h3 className="text-white font-semibold truncate">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}