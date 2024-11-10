import { create } from 'zustand';
import { supabase } from './supabase';
import toast from 'react-hot-toast';

interface Track {
  id: string;
  name: string;
  artist_name: string;
  image: string;
  audio: string;
}

interface PlayerStore {
  currentTrack: Track | null;
  isPlaying: boolean;
  queue: Track[];
  volume: number;
  likedSongs: Set<string>;
  setCurrentTrack: (track: Track) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setQueue: (tracks: Track[]) => void;
  setVolume: (volume: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  toggleLike: (track: Track) => Promise<void>;
  fetchLikedSongs: () => Promise<void>;
}

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  queue: [],
  volume: 1,
  likedSongs: new Set(),

  setCurrentTrack: (track) => set({ currentTrack: track }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setQueue: (tracks) => set({ queue: tracks }),
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),

  playNext: () => {
    const { queue, currentTrack } = get();
    const currentIndex = currentTrack ? queue.findIndex(track => track.id === currentTrack.id) : -1;
    const nextTrack = queue[currentIndex + 1];
    if (nextTrack) {
      set({ currentTrack: nextTrack, isPlaying: true });
    }
  },

  playPrevious: () => {
    const { queue, currentTrack } = get();
    const currentIndex = currentTrack ? queue.findIndex(track => track.id === currentTrack.id) : -1;
    const previousTrack = queue[currentIndex - 1];
    if (previousTrack) {
      set({ currentTrack: previousTrack, isPlaying: true });
    }
  },

  toggleLike: async (track) => {
    const { likedSongs } = get();
    const isLiked = likedSongs.has(track.id);

    try {
      if (isLiked) {
        const { error } = await supabase
          .from('liked_songs')
          .delete()
          .eq('track_id', track.id);

        if (error) throw error;

        likedSongs.delete(track.id);
        set({ likedSongs: new Set(likedSongs) });
        toast.success('Removed from liked songs');
      } else {
        const { error } = await supabase
          .from('liked_songs')
          .insert([
            {
              track_id: track.id,
              name: track.name,
              artist_name: track.artist_name,
              image: track.image,
              audio: track.audio,
            },
          ]);

        if (error) throw error;

        likedSongs.add(track.id);
        set({ likedSongs: new Set(likedSongs) });
        toast.success('Added to liked songs');
      }
    } catch (error) {
      toast.error('Failed to update liked songs');
      console.error('Error:', error);
    }
  },

  fetchLikedSongs: async () => {
    try {
      const { data, error } = await supabase
        .from('liked_songs')
        .select('track_id');

      if (error) throw error;

      const likedIds = new Set(data.map(item => item.track_id));
      set({ likedSongs: likedIds });
    } catch (error) {
      console.error('Error fetching liked songs:', error);
      toast.error('Failed to fetch liked songs');
    }
  },
}));