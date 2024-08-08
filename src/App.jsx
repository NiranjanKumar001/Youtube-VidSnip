import { useState } from 'react'
import './App.css'

function App() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleDownloadClick = () => {
    alert(`Downloading video from: ${videoUrl}`);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src='/logo.png' className="logo" alt="logo" />
        </a>
      </div>
      <h1>VidSnip</h1>
      <div className="card">
        <div className="input-container">
          <input
            type="text"
            value={videoUrl}
            onChange={handleInputChange}
            placeholder="Enter YouTube URL"
          />
          <button onClick={handleDownloadClick}>
            Download
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
