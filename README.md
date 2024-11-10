# Sonora

Excited to share that I’m building Sonora! This open-source project is designed specifically for beat producers and sound creators to share their work with audiences like film producers and anyone seeking unique, relaxing audio.

<img src="https://i2.paste.pics/e5f386f6c3d3451cbfc2abd53aefbbdd.png?rand=Ax1RQK6fXb" alt="Sonora-music"/>

## 🎵 Features

- **Music Playback**: Full audio player with play/pause, skip, and volume controls
- **Library Management**: Create playlists and manage your music collection
- **Liked Songs**: Save your favorite tracks with persistent storage
- **Search Functionality**: Search through the music catalog
- **Responsive Design**: Beautiful UI that works across all devices
- **Real-time Updates**: Instant feedback for all user interactions
- **State Management**: Robust state handling with Zustand
- **Backend Integration**: Supabase for data persistence
- **API Integration**: Jamendo API for music catalog

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **State Management**: Zustand
- **Routing**: React Router v6
- **Backend**: Supabase
- **Music API**: Jamendo
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mw-spotify.git
cd mw-spotify
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_JAMENDO_CLIENT_ID=your_jamendo_client_id
```

4. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Player.tsx      # Music player component
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Library.tsx     # Music library view
│   └── ...
├── lib/                # Utilities and store
│   ├── store.ts        # Zustand store
│   └── supabase.ts     # Supabase client
└── main.tsx            # Application entry point
```

## 🎮 Usage

### Music Playback

- Click the play button on any track to start playback
- Use the player controls at the bottom for play/pause, skip, and volume
- The current track's information is displayed in the player bar

### Library Management

- Navigate to "Your Library" to view your music collection
- Create new playlists using the "Create Playlist" button
- Add songs to playlists by clicking the "+" button on tracks

### Liked Songs

- Click the heart icon on any track to like/unlike
- View all liked songs in the "Liked Songs" section
- Liked songs are persisted in your account

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Create the following tables:
   - `liked_songs`
   - `playlists`
   - `playlist_tracks`
3. Set up the appropriate RLS policies

### Jamendo API

1. Register for a Jamendo API key
2. Add the client ID to your environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Spotify](https://spotify.com) for design inspiration
- [Jamendo](https://jamendo.com) for the music API
- [Supabase](https://supabase.com) for the backend infrastructure
- [Unsplash](https://unsplash.com) for images
- [Lucide](https://lucide.dev) for icons

## 🔮 Future Improvements

- [ ] Add authentication system
- [ ] Implement social features (following, sharing)
- [ ] Add music recommendations
- [ ] Enhance playlist management
- [ ] Add mobile app version
- [ ] Implement offline mode
- [ ] Add collaborative playlists
- [ ] Enhance search with filters

## 💫 Live Demo

Visit the live demo at: [Sonora Demo](https://your-demo-url.netlify.app)

## 📱 Screenshots

Coming soon...

## ⚠️ Disclaimer

This project is for educational purposes only. All music is sourced from Jamendo's royalty-free catalog.
