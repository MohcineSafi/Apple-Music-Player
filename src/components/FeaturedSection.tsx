
import React from 'react';
import { Play } from 'lucide-react';

const FeaturedSection = () => {
  return (
    <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 p-8">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="text-sm font-medium text-white/90 mb-2">FEATURED PLAYLIST</div>
        <h1 className="text-4xl font-bold text-white mb-4">Today's Hits</h1>
        <p className="text-white/90 mb-6 max-w-md">
          The biggest songs right now. Cover: Olivia Rodrigo
        </p>
        <div className="flex items-center space-x-4">
          <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-2xl">
            <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
          </button>
          <div className="text-white/90">
            <div className="text-sm">50 songs</div>
            <div className="text-xs text-white/70">3 hours</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
