window.addEventListener("mouseup", handleSelection);
window.addEventListener("mouseover", handleLoad);

var selectedText;
var selectedText2;

function handleLoad() {
    selectedText2 = getElementByXpath(
        "//div[@data-testid='tweetText']"
    ) ?.textContent;
    console.log(selectedText2);
}

async function pf(){
    const response = await fetch("ec2-34-220-79-2.us-west-2.compute.amazonaws.com:5000/", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: `{
           "txt": "feio"
          }`,
        });
        
        response.json().then(data => {
          console.log(data);
        });
}

function getElementByXpath(path) {
    return window.document.evaluate(
        path,
        window.document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
}

function handleSelection() {
    selectedText = window.getSelection().toString().replace(/\s/g, "");
    pf();
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log("gotMessage");
    let msg =
        selectedText && selectedText.length > 0 ?
        selectedText :
        "_TextNotSelected_";
    sendResponse({ swor: msg });
}