import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from './MainContent';
import LikedSongs from './LikedSongs';
import Search from './Search';
import Library from './Library';
import Playlists from './Playlists';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/search" element={<Search />} />
      <Route path="/library" element={<Library />} />
      <Route path="/liked-songs" element={<LikedSongs />} />
      <Route path="/playlists" element={<Playlists />} />
    </Routes>
  );
}