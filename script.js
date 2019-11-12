var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var today = new Date();
var theTime = today.getHours();
var greeting;

function inputLength(){
  return input.value.length;
}

// adds list items and appends
function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

// displays window alert message and removes all list items
function removeItem(itemid){
   alert("You're going to delete all your items!");
 while (ul.hasChildNodes()) {
   ul.removeChild(ul.firstChild);
 }
}

// adds list items after pressing enter button
function addListAfterClick(){
  if (inputLength() > 0) {
    createListElement();
  }
}

// adds list items after clicking enter key
function addListAfterKeypress(event){
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Displays time of day
if (theTime > 18){
  greeting = 'Good evening';
} else if (theTime > 12) {
  greeting = 'Good afternoon';
} else if (theTime > 0) {
  greeting = 'Good morning';
} else {
  greeting = 'Welcome';
}

document.write(greeting);
