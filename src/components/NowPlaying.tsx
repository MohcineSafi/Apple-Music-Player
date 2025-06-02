
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, List } from 'lucide-react';

const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="h-20 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 px-4 flex items-center justify-between">
      {/* Track Info */}
      <div className="flex items-center space-x-4 flex-1 min-w-0">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0"></div>
        <div className="min-w-0">
          <h4 className="font-medium text-white truncate">Electric Dreams</h4>
          <p className="text-sm text-gray-400 truncate">Synthwave Artist</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-black" />
            ) : (
              <Play className="w-5 h-5 text-black ml-0.5" fill="currentColor" />
            )}
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="flex items-center space-x-3 w-full">
          <span className="text-xs text-gray-400">1:23</span>
          <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      {/* Volume & Queue */}
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <button className="text-gray-400 hover:text-white transition-colors">
          <List className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
