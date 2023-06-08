import React from 'react';
import MusicCard from './MusicCard';

function Music() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const contentStyle = {
    textAlign: 'center',
  };

  const headingStyle = {
    margin: '0',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Music</h1>
        <p className="read-the-docs">Billie Eilish</p>
        <MusicCard />
      </div>
    </div>
  );
}

export default Music;
