chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const url = request.url;
    // Implement the download logic here
    // Example: using the chrome.downloads API
    chrome.downloads.download({
      url: url,
      filename: 'video.mp4'
    });
  });
  