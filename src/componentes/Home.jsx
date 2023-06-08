import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const contentStyle = {
    textAlign: 'center',
    maxWidth: '800px', // Ajusta el ancho máximo del contenido según tus necesidades
    margin: '0 auto', // Aplica un margen automático para centrar el contenido horizontalmente
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>Billie Eilish</h1>
        <p>
          Billie Eilish's website is a captivating space that combines photographs and music from this talented artist.
          Additionally, the website offers the opportunity to enjoy her music, from her popular hits to exclusive content.
          It is a perfect destination for fans who want to immerse themselves in Billie Eilish's visual and sonic aesthetic.
        </p>
      </div>
    </div>
  );
}

export default Home;
