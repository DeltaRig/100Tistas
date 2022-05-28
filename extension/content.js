window.addEventListener("onload", handleSelection());

var selectedText;

async function handleSelection() {
  console.log("SOCORRO");
  selectedText = window.getSelection().toString().replace(/\s/g, "");
  await pf();

}

//chrome.runtime.onMessage.addListener(gotMessage);

async function pf(){
  console.log("oi");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "txt": "algum ser humano arrombado sendo a mão no interfone aqui de casa! FDP"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

   await fetch("https://100tistas.duckdns.org/", requestOptions)
     //.then(response => response)
     .then(result => console.log(result.text().then(data => console.log('data->', data))))
     .catch(error => console.log('error', error));
}


function gotMessage(message, sender, sendResponse) {
  let msg =
    selectedText && selectedText.length > 0
      ? selectedText
      : "_TextNotSelected_";
  sendResponse({ swor: msg });
}
