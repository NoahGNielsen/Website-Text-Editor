chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "getOptions") {
    chrome.storage.local.get(["originalText", "newText"], (result) => {
      sendResponse(result);
    });
    return true;
  } else if (message.type === "setOptions") {
    chrome.storage.local.set(message.data, () => {
      sendResponse();
    });
    return true;
  }
});
