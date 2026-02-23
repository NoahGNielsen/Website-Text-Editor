chrome.storage.local.get(["originalText", "newText"], (result) => {
  const originalText = result.originalText;
  const newText = result.newText;

  if (originalText && newText) {
    replaceText(originalText, newText);
  }
});

function replaceText(originalText, newText) {
  const elements = document.getElementsByTagName("*");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
      const node = element.childNodes[j];

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        const replacedText = text.replaceAll(originalText, newText);

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}
