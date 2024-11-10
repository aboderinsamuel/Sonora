import React, { useEffect, useState } from 'react';
import { Play, Pause, Heart } from 'lucide-react';
import { usePlayerStore } from '../lib/store';
import toast from 'react-hot-toast';

interface Track {
  id: string;
  name: string;
  artist_name: string;
  image: string;
  audio: string;
}

export default function MainContent() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const { 
    currentTrack, 
    setCurrentTrack, 
    isPlaying, 
    setIsPlaying, 
    setQueue,
    likedSongs,
    toggleLike,
    fetchLikedSongs 
  } = usePlayerStore();

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          'https://api.jamendo.com/v3.0/tracks/?client_id=746c58d4&format=json&limit=20&include=musicinfo&groupby=artist_id'
        );
        const data = await response.json();
        const formattedTracks = data.results.map((track: any) => ({
          id: track.id,
          name: track.name,
          artist_name: track.artist_name,
          image: track.image,
          audio: track.audio
        }));
        setTracks(formattedTracks);
        setQueue(formattedTracks);
      } catch (error) {
        toast.error('Failed to load tracks');
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
    fetchLikedSongs();
  }, [setQueue, fetchLikedSongs]);

  const playTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-b from-blue-900 to-black p-8">
        <div className="animate-pulse space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-800 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-black p-8 overflow-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Featured Tracks</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tracks.map((track) => (
          <div 
            key={track.id}
            className="bg-gray-900/60 p-4 rounded-lg hover:bg-gray-900/80 transition group"
          >
            <div className="relative">
              <img 
                src={track.image || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D'} 
                alt={track.name}
                className="w-full aspect-square object-cover rounded-md mb-4"
              />
              <button
                onClick={() => playTrack(track)}
                className="absolute bottom-4 right-4 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0 hover:scale-105 hover:bg-green-400"
              >
                {currentTrack?.id === track.id && isPlaying ? (
                  <Pause size={24} className="text-black" />
                ) : (
                  <Play size={24} className="text-black" />
                )}
              </button>
              <button
                onClick={() => toggleLike(track)}
                className="absolute top-4 right-4 text-white hover:scale-110 transition"
              >
                <Heart
                  size={24}
                  fill={likedSongs.has(track.id) ? 'white' : 'none'}
                  className={likedSongs.has(track.id) ? 'text-white' : 'text-white opacity-0 group-hover:opacity-100'}
                />
              </button>
            </div>
            <h3 className="text-white font-semibold truncate">{track.name}</h3>
            <p className="text-gray-400 text-sm truncate">{track.artist_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}