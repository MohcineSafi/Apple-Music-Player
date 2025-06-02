
import React from 'react';
import AlbumCard from './AlbumCard';

const AlbumGrid = () => {
  const albums = [
    { id: 1, title: 'Midnight Dreams', artist: 'Luna Park', color: 'from-blue-500 to-purple-600' },
    { id: 2, title: 'Summer Vibes', artist: 'Ocean Waves', color: 'from-orange-400 to-pink-500' },
    { id: 3, title: 'Electric Nights', artist: 'Neon City', color: 'from-green-400 to-blue-500' },
    { id: 4, title: 'Golden Hour', artist: 'Sunset Drive', color: 'from-yellow-400 to-orange-500' },
    { id: 5, title: 'Deep Focus', artist: 'Zen Master', color: 'from-indigo-500 to-purple-600' },
    { id: 6, title: 'Urban Beats', artist: 'City Lights', color: 'from-red-500 to-pink-600' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumGrid;
