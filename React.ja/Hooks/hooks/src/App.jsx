import React, { useState } from 'react'

function App() {
  const [numin , setnumin] =useState(0);
  const [numde , setnumde] =useState(0);

  function increase(){
    let count = numin;
    count = count+1;
    setnumin(count);
  }
   function decrease(){
    let count = numde;
    count = count-1;
    setnumde(count);
  }
  
  return (
    <div>
      <button onClick={increase}>increase{numin}</button>
      <button onClick={decrease}>decrease{numde}</button>
    </div>
  )
}

export default App

