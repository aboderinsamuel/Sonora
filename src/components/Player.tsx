import React, { useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { usePlayerStore } from '../lib/store';

export default function Player() {
  const { 
    currentTrack, 
    isPlaying, 
    setIsPlaying,
    volume,
    setVolume,
    playNext,
    playPrevious
  } = usePlayerStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack, volume, setIsPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      playNext();
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [playNext]);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black p-4">
      <audio ref={audioRef} src={currentTrack.audio} />
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4">
          <img src={currentTrack.image} alt={currentTrack.name} className="w-14 h-14 rounded" />
          <div>
            <h4 className="text-white font-medium">{currentTrack.name}</h4>
            <p className="text-gray-400 text-sm">{currentTrack.artist_name}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            className="text-gray-400 hover:text-white"
            onClick={playPrevious}
          >
            <SkipBack size={20} />
          </button>
          <button 
            className="bg-white rounded-full p-2 hover:scale-105 transition"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={24} className="text-black" /> : <Play size={24} className="text-black" />}
          </button>
          <button 
            className="text-gray-400 hover:text-white"
            onClick={playNext}
          >
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <Volume2 size={20} className="text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 h-1 bg-gray-600 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
        </div>
      </div>
    </div>
  );
}