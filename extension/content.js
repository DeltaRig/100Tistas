window.addEventListener("mouseup", handleSelection);
window.addEventListener("load", handleLoad);

function allTweets(){
  var all = window.document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
      console.log(getElementByXpath("//div[@data-testid='tweetText']")?.textContent);
  }
}

function handleLoad(){
  var all = window.document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
      console.log(getElementByXpath("//div[@data-testid='tweetText']")?.textContent);
  }
}

var selectedText;
var selectedText2;

function getElementByXpath(path) {
  return window.document.evaluate(path, window.document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function handleSelection() {
  selectedText = window.getSelection().toString().replace(/\s/g, "");
  
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log("gotMessage");
  let msg =
    selectedText && selectedText.length > 0
      ? selectedText
      : "_TextNotSelected_";
  sendResponse({ swor: msg });
}
