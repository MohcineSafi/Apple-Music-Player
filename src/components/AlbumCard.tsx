
import React from 'react';
import { Play } from 'lucide-react';

interface Album {
  id: number;
  title: string;
  artist: string;
  color: string;
}

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-3">
        <div className={`aspect-square rounded-lg bg-gradient-to-br ${album.color} shadow-lg`}></div>
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 shadow-2xl hover:scale-105">
          <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
        </button>
      </div>
      <h3 className="font-medium text-white truncate mb-1">{album.title}</h3>
      <p className="text-sm text-gray-400 truncate">{album.artist}</p>
    </div>
  );
};

export default AlbumCard;
