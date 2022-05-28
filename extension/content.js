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
    return '{ "response" : [' +
    '{ "palavra encontrada":"desgraçado" } ]}';

    /**
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
         */
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


async function dictionary(query) {
    console.log("dictionary");
    let url = `http://localhost:3333/v2/${query}`;
    let response = await fetch(url);
    wordef = await response.json();
    if (wordef && !wordef.title) {
      indlimit = wordef[0].meanings.length;
      word = query;
      phonetic = wordef[0].partOfSpeech ? wordef[0].partOfSpeech : "";
      index = 0;
  
      setValues();
  
      if (indlimit > 1) {
        document
          .getElementById("navigatecontainer")
          .classList.remove("hidenavigator");
      }
    } else if (wordef.title) {
      document.getElementById("error").innerHTML = "⚠  " + wordef.title;
    }
  }

function handleSelection() {
    /*
    selectedText = window.getSelection().toString().replace(/\s/g, "");
    var result = pf();
    result = "desgraçado"
    console.log("abss " , window);
    var toReplace = "sem sorte"; //dictionary("desgraçado");
    //Console.log("AAA" + toReplace);
    console.log(typeof window)
    console.log(selectedText.replace(result, toReplace));
    // window.getSelection().
    console.log("ac elem", document.activeElement)
    console.log("ac elem class", document.activeElement.className)
    console.log("-----", window.document.getElementsByClassName(document.activeElement.className))
    console.log("..", window.getSelection().anchorNode)
    console.log("..", typeof window.getSelection().anchorNode)
    console.log(",,,", window.document.getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0")[0])
    // console.log("!", window.document.getElements("//*[@id=\"id__okyeu1vv0n\"]/span[2]").item)
    // console.log("=", getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div/div/div[2]/div/section/div/div/div[1]/div/div/div/article/div/div/div/div[2]/div[2]/div[2]/div[1]/div/span[2]").textContent)
    // result = getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div/div/div[2]/div/section/div/div/div[1]/div/div/div/article/div/div/div/div[2]/div[2]/div[2]/div[1]/div/span[2]").textContent

    // console.log(document[2])
    // window.document.setSelection(selectedText)

*/
    // var ptimdom = new dom().parseFromString(ptimxml.toString());
    // var nodesPTIM = xpath.select("/html/body/div[1]/div/div/div[2]/main/div/div/div/div/div/div[2]/div/section/div/div/div[1]/div/div/div/article/div/div/div/div[2]/div[2]/div[2]/div[1]/div/span[2]", doc);
    // doc.replaceChild(ptimdom,nodesPTIM[0]);

    // nodesPTIM[0]
    let resultXpath = getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div/div/div[2]/div/section/div/div/div[1]/div/div/div/article/div/div/div/div[2]/div[2]/div[2]/div[1]/div/span[2]")
    // getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div/div/div[2]/div/section/div/div/div[1]/div/div/div/article/div/div/div/div[2]/div[2]/div[2]/div[1]/div/span[2]").replaceChild(result,toReplace)
    // result.parentNode.replaceChild(result, toReplace)
    // window.getSelection().anchorNode.replaceChild(result, toReplace)
    // console.log("+++",window.getSelection().getRangeAt(0).getNodes())
    console.log(">", window.getSelection().selectAllChildren.replaceChild("desgraçado", toReplace))
    // .replaceChild("desgraçado", toReplace))
    // for (let e of window.getSelection().selectAllChildren){
    //     e.replaceChild("desgraçado", toReplace)
    // }
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