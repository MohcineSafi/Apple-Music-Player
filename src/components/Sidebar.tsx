
import React from 'react';
import { Plus, Music, List } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { title: 'Browse', active: true },
    { title: 'Listen Now', active: false },
    { title: 'Library', active: false },
    { title: 'Recently Added', active: false },
  ];

  const playlists = [
    'My Favorites',
    'Chill Vibes',
    'Workout Mix',
    'Road Trip',
    'Focus Music',
  ];

  return (
    <div className="w-64 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800/50 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-800/50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Music className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-semibold">Music</h1>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.title}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-gray-800/80 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Recently Added */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-400">Recently Added</h3>
          </div>
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/40 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">Album {i + 1}</p>
                  <p className="text-xs text-gray-400 truncate">Artist Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Playlists */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-400">Playlists</h3>
            <button className="p-1 text-gray-400 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-1">
            {playlists.map((playlist) => (
              <button
                key={playlist}
                className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/40 rounded-lg transition-colors flex items-center space-x-3"
              >
                <List className="w-4 h-4" />
                <span>{playlist}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
