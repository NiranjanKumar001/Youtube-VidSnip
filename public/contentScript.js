chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getVideoQualities') {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      const qualities = [
        { quality: '720p', url: videoElement.src.replace('low', '720p') },
        { quality: '1080p', url: videoElement.src.replace('low', '1080p') }
      ];
      sendResponse({ qualities });
    } else {
      sendResponse({ error: 'No video found' });
    }
  }
});
