window.addEventListener("mouseup", handleSelection);

var selectedText;
var selectedText2;

function getElementByXpath(path) {
  return window.document.evaluate(path, window.document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function handleSelection() {
  selectedText = window.getSelection().toString().replace(/\s/g, "");
  console.log(getElementByXpath("//div[@data-testid='tweetText']").textContent);
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  let msg =
    selectedText && selectedText.length > 0
      ? selectedText
      : "_TextNotSelected_";
  sendResponse({ swor: msg });
}
