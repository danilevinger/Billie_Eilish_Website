import React from 'react';

const Section = ({ title, content, backgroundColor, h2Transform, pTransform }) => (
  <section style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', backgroundColor }}>
    <h2 style={{ transform: h2Transform }}>{title}</h2>
    <p style={{ transform: pTransform, width: '700px', textAlign: 'center' }}>{content}</p>
  </section>
);

const AboutSection = () => (
  <Section
    title="Acerca de"
    content="Billie Eilish Pirate Baird O'Connell (Los Ángeles, California; 18 de diciembre de 2001), conocida simplemente como Billie Eilish, es una cantante y compositora estadounidense. Adquirió fama como artista cuando tenía 13 años, a raíz del sencillo «Ocean Eyes» que se publicó en 2015 en SoundCloud y volvió a lanzarse con un vídeo musical en YouTube en 2016, a la edad de 14 años, lo que la convirtió en un fenómeno viral. En 2017, publicó su EP Don't Smile at Me, producido por su hermano Finneas O'Connell."
    backgroundColor="#956c4c"
    h2Transform="translateX(250px)"
    pTransform="translateX(500px)"
  />
);

const BiographySection = () => (
  <Section
    title="Biografía"
    content="Nació en Los Ángeles (Estados Unidos) el 18 de diciembre de 2001 y se crio en el barrio de Highland Park, en el seno de una familia de artistas. Sus padres son la actriz Maggie Baird y el músico y guionista Patrick O'Connell. Tiene un hermano mayor, Finneas O'Connell, que también es compositor y actor de reparto. Posee ascendencia irlandesa y escocesa. Durante su infancia recibió educación en el hogar y a los ocho años se unió al Coro Infantil de Los Ángeles, donde aprendió canto y técnica musical. Al mismo tiempo empezó a tocar el piano y el ukelele, y tomó clases de baile con profesores privados. Al cumplir los once años ya componía y cantaba sus propias canciones, siguiendo los pasos de su hermano mayor."
    backgroundColor="#a88963"
    h2Transform="translateX(270px)"
    pTransform="translateX(500px)"
  />
);

const ArtisticCareerSection = () => (
  <Section
    title="Carrera Artística"
    content="2021-presente: \n\nHappier Than Ever\nEn octubre de 2020, Billie Eilish reveló en una entrevista con Vanity Fair que estaba trabajando en dieciséis canciones nuevas y que estaba muy emocionada por todas ellas. Esto dio indicios de un próximo proyecto musical, posiblemente su segundo álbum de estudio, que se lanzaría en 2021.

    \n\nEn enero de 2021, se lanzó el sencillo 'Lo vas a olvidar' en colaboración con la cantante española Rosalía. Esta canción formó parte de la banda sonora de la serie de HBO, Euphoria. El documental 'Billie Eilish: The World's a Little Blurry', dirigido por R. J. Cutler, fue lanzado en Apple TV+ y en cines selectos.\n\n La película recibió elogios de críticos y fanáticos por brindar una mirada profunda a la vida personal de Eilish durante su ascenso a la fama.

    En los Premios Grammy de 2021, Billie Eilish ganó dos premios. El primero fue el Premio Grammy a la Mejor Canción Escrita para Medios Visuales por su tema 'No Time to Die', y el segundo fue el Premio Grammy a la Mejor Grabación del Año por su sencillo de 2019 'Everything I Wanted'. \n\nDurante su discurso de aceptación, Eilish reconoció que la rapera Megan Thee Stallion también merecía ganar y agradeció a sus fans y a su hermano Finneas por su apoyo.

    El 27 de abril de 2021, Eilish anunció a través de Instagram que lanzaría su segundo álbum, titulado 'Happier Than Ever', el 30 de julio. También reveló la portada del álbum y compartió la lista de canciones en Apple Music. \nEl álbum estará disponible en varios formatos, incluyendo vinilos coleccionables y casetes en diferentes colores. El 29 de abril de 2021, se lanzó el tercer sencillo del álbum, llamado 'Your Power', junto con su video musical dirigido por ella misma. \n\nEl 2 de junio, Eilish lanzó 'Lost Cause' como el cuarto sencillo de 'Happier Than Ever'. El 9 de julio, se lanzó 'NDA' como el quinto sencillo del álbum."
    backgroundColor="#8e623e"
    h2Transform="translateX(220px)"
    pTransform="translateX(400px)"
  />
);

const Info = () => (
  <div style={{ height: '100vh' }}>
    <AboutSection />
    <BiographySection />
    <ArtisticCareerSection />
  </div>
);

export default Info;
