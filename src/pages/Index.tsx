
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import NowPlaying from '../components/NowPlaying';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <NowPlaying />
    </div>
  );
};

export default Index;
