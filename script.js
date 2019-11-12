var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var today = new Date();
var theTime = today.getHours();
var greeting;

function inputLength(){
  return input.value.length;
}

function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function removeListElement(){
  var item = document.getElementById(enter.value);
  ul.removeChild(item);
}

function removeItem(itemid){
   alert("You're going to delete all your items!");
 while (ul.hasChildNodes()) {
   ul.removeChild(ul.firstChild);
 }
}

function addListAfterClick(){
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event){
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Displays time of day
