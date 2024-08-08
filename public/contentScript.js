chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'downloadVideo') {
      const videoUrl = document.querySelector('video').src;
      sendResponse({ videoUrl });
    }
  });
  