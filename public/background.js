chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'downloadVideo') {
    chrome.scripting.executeScript({
      target: {tabId: sender.tab.id},
      function: getVideoQualities
    }, (injectionResults) => {
      const [result] = injectionResults;
      const qualities = result.result;
      chrome.storage.local.set({ qualities });
    });
  }
});

function getVideoQualities() {
  const videoElement = document.querySelector('video');
  if (videoElement) {
    return [
      { quality: '720p', url: videoElement.src.replace('low', '720p') },
      { quality: '1080p', url: videoElement.src.replace('low', '1080p') }
    ];
  }
  return { error: 'No video found' };
}
