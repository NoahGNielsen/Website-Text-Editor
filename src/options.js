const originalTextInput = document.getElementById("originalText");
const newTextInput = document.getElementById("newText");
const saveButton = document.getElementById("saveButton");

chrome.runtime.sendMessage({ type: "getOptions" }, (response) => {
  originalTextInput.value = response.originalText || "";
  newTextInput.value = response.newText || "";
});

saveButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "setOptions",
    data: {
      originalText: originalTextInput.value,
      newText: newTextInput.value,
    },
  }, () => {
    alert("Settings saved");
  });
});
