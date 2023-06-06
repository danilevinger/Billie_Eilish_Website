import React, { useState } from 'react';
import MusicCard from './MusicCard'
function Music() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Music</h1>
      <p className="read-the-docs">
      Billie Eilish
      </p>

    <MusicCard/>

    </>
  )

  
}

export default Music
