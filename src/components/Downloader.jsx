import React, { useState } from 'react';

const Downloader = () => {
  const [url, setUrl] = useState('');

  const handleDownload = () => {
    // Logic to handle video download
    chrome.runtime.sendMessage({ url });
  };

  return (
    <div>
      <h1>YouTube Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default Downloader;
