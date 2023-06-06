import React, { useState } from 'react';
import Carousel from './Carousel'
function Photos() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{ marginTop: '60px'}}>Photos</h1>
      <Carousel/>
    </>
  )

  
}

export default Photos
