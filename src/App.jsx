import { useEffect } from 'react'
import React from 'react';

function App() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/MLLab.zip'; // ZIP file path in `public/`
    link.download = 'sample.zip'; // Optional: set download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    handleDownload();
  }, [])

  return (
    <></>
  )
}

export default App
