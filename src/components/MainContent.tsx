
import React from 'react';
import AlbumGrid from './AlbumGrid';
import FeaturedSection from './FeaturedSection';

const MainContent = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900/20 to-black">
      <div className="p-6">
        <FeaturedSection />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Made for You</h2>
          <AlbumGrid />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <AlbumGrid />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
