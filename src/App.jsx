import { useEffect } from 'react'

function App() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/temp.zip';
    link.download = 'sample.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    handleDownload();
  }, [])

  return (
    <p>....</p>
  )
}

export default App
