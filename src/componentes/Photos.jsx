import React from 'react';
import Carousel from './Carousel';

function Photos() {
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
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Photos</h1>
        <Carousel />
      </div>
    </div>
  );
}

export default Photos;
