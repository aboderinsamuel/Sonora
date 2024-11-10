import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
  const [query, setQuery] = useState('');

  return (
    <div className="flex-1 bg-gradient-to-b from-purple-900 to-black p-8 overflow-auto">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white rounded-full text-black focus:outline-none"
          />
        </div>
        
        {!query && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Browse all</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {['Pop', 'Rock', 'Hip-Hop', 'Electronic', 'Jazz', 'Classical', 'R&B', 'Folk'].map((genre) => (
                <div
                  key={genre}
                  className="aspect-square rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-6 flex items-end cursor-pointer hover:scale-105 transition"
                >
                  <h3 className="text-2xl font-bold text-white">{genre}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}