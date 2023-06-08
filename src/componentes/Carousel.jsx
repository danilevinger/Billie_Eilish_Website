import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carousell() {
  const imageStyle = {
    maxWidth: '700px', // Ajusta el ancho máximo de la imagen según tus necesidades
    maxHeight: '500px', // Ajusta la altura máxima de la imagen según tus necesidades
  };

  const carouselContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const thumbsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const images = [
    { src: './src/assets/billie1.jpeg', alt: 'Slide 1' },
    { src: './src/assets/billie2.jpeg', alt: 'Slide 2' },
    { src: './src/assets/billie3.jpeg', alt: 'Slide 3' },
    { src: './src/assets/billie4.jpeg', alt: 'Slide 4' },
    { src: './src/assets/billie5.jpeg', alt: 'Slide 5' },
    { src: './src/assets/billie6.jpeg', alt: 'Slide 6' },
  ];

  return (
    <div style={carouselContainerStyle}>
      <Carousel showArrows showThumbs autoPlay thumbContainerStyle={thumbsContainerStyle}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} style={imageStyle} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
