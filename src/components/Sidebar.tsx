import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, Library, Plus, Heart } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-8">Sonora-music</h1>
        <nav className="space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-4 transition ${
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }`
            }
          >
            <Home size={24} />
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex items-center gap-4 transition ${
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }`
            }
          >
            <Search size={24} />
            Search
          </NavLink>
          <NavLink
            to="/library"
            className={({ isActive }) =>
              `flex items-center gap-4 transition ${
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }`
            }
          >
            <Library size={24} />
            Your Library
          </NavLink>
        </nav>
        <div className="mt-8 space-y-4">
          <NavLink
            to="/playlists"
            className={({ isActive }) =>
              `flex items-center gap-4 transition ${
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }`
            }
          >
            <Plus size={24} />
            Create Playlist
          </NavLink>
          <NavLink
            to="/liked-songs"
            className={({ isActive }) =>
              `flex items-center gap-4 transition ${
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }`
            }
          >
            <Heart size={24} />
            Liked Songs
          </NavLink>
        </div>
      </div>
      <div className="mt-auto p-6">
        <div className="text-xs text-gray-400 space-y-2">
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About</p>
        </div>
      </div>
    </div>
  );
}
