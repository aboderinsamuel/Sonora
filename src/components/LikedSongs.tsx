import React, { useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { usePlayerStore } from '../lib/store';
import { supabase } from '../lib/supabase';
import { LikedSong } from '../lib/supabase';
import toast from 'react-hot-toast';

export default function LikedSongs() {
  const [likedSongs, setLikedSongs] = useState<LikedSong[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentTrack, setCurrentTrack, isPlaying, setIsPlaying, setQueue } = usePlayerStore();

  useEffect(() => {
    fetchLikedSongs();
  }, []);

  const fetchLikedSongs = async () => {
    try {
      const { data, error } = await supabase
        .from('liked_songs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setLikedSongs(data || []);
      setQueue(data || []);
    } catch (error) {
      toast.error('Failed to fetch liked songs');
    } finally {
      setLoading(false);
    }
  };

  const playTrack = (track: LikedSong) => {
    if (currentTrack?.id === track.track_id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack({
        id: track.track_id,
        name: track.name,
        artist_name: track.artist_name,
        image: track.image,
        audio: track.audio
      });
      setIsPlaying(true);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-b from-purple-900 to-black p-8">
        <div className="animate-pulse space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-800 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-purple-900 to-black p-8 overflow-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Liked Songs</h1>
      
      {likedSongs.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-xl mb-4">No liked songs yet</p>
          <p>Start liking some tracks to see them here!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {likedSongs.map((song) => (
            <div 
              key={song.id}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/10 group transition"
            >
              <img 
                src={song.image || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D'} 
                alt={song.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-white font-semibold">{song.name}</h3>
                <p className="text-gray-400 text-sm">{song.artist_name}</p>
              </div>
              <button
                onClick={() => playTrack(song)}
                className="opacity-0 group-hover:opacity-100 transition"
              >
                {currentTrack?.id === song.track_id && isPlaying ? (
                  <Pause size={24} className="text-white" />
                ) : (
                  <Play size={24} className="text-white" />
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}