var btn = document.getElementById("button");
var ip = document.querySelector("textarea");
var op = document.getElementById("output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslateURL(input){
  return url+"?"+"text= "+input
};

function errorCatch(error){
  console.log("error occured :"+error);
  alert("error occured, plz try after sometimes !")
};

function clickEventHandler(){
    // console.log("clicked");
    // console.log("value"+ip.value);
    // op.innerText = "hi this is translation" + ip.value;
    var inputText = ip.value;

    fetch(getTranslateURL(inputText))
      .then(response => response.json())
      .then(json =>{
        var translatedText = json.contents.translated;
        op.innerText = translatedText;
      })
      .catch(errorCatch)

};

btn.addEventListener("click", clickEventHandler);
