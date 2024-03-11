import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState("0");
  const [width, setWidth] = useState("0");

  useEffect(() => {
    setHeight(window.height?.toString());
    setWidth(window.width?.toString());
  }, [window])

  return (
    <canvas height={height} width={width} className='app' />
  );
}

export default App;
