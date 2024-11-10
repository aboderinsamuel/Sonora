import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import AppRoutes from './components/AppRoutes';
import Player from './components/Player';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col bg-black text-white">
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <AppRoutes />
        </div>
        <Player />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;