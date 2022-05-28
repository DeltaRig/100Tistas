window.addEventListener("mouseup", handleSelection);

var selectedText;

function handleSelection() {
  selectedText = window.getSelection().toString().replace(/\s/g, "");
  pf();

}

chrome.runtime.onMessage.addListener(gotMessage);

async function pf(){
  console.log("oi");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "txt": "algum ser humano desgraçado sendo a mão no interfone aqui de casa! FDP"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://100tistas.duckdns.org/", requestOptions)
    .then(response => console.log(response))
    //.then(result => console.log(result))
    .catch(error => console.log('error', error));
}
function gotMessage(message, sender, sendResponse) {
  let msg =
    selectedText && selectedText.length > 0
      ? selectedText
      : "_TextNotSelected_";
  sendResponse({ swor: msg });
}
