import React, { useState } from 'react';
import './App.css';
import downloadIcon from './assets/download-icon.svg';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');

  const handleDownload = () => {
    if (!inputUrl) {
      alert('Please enter a valid YouTube URL.');
      return;
    }
    // Implement your video URL fetching logic here
    // For demonstration purposes, let's assume inputUrl is valid and the video URL is fetched
    setVideoUrl(inputUrl);
    chrome.downloads.download({ url: inputUrl, filename: 'video.mp4' });
  };

  return (
    <div className="app-container">
      <h1 className="app-title">VidSnip</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="url-input"
        />
        <button className="download-button" onClick={handleDownload}>
          <img src={downloadIcon} alt="Download" className="download-icon" /> Download 
        </button>
      </div>
      {videoUrl && (
        <p className="video-url">
          Video URL: <a href={videoUrl} target="_blank" rel="noopener noreferrer">{videoUrl}</a>
        </p>
      )}
    </div>
  );
};

export default App;