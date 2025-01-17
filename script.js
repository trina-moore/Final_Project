/*
JavaScript Final
Author: Trina Moore
Date: 12/9/19
Filename: script.js
*/

var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var error = document.getElementById("errormessage");

function inputLength() {
  return input.value.length;
}

// adds list items and appends
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

// displays window alert message and removes all list items
function removeItem(itemid) {
  alert("You're going to delete all your items!");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}

// adds list items after pressing enter button
function addListAfterClick() {
  error.innerHTML = "";
  try {
    if (inputLength() = 0) throw "Input is invalid";
  } catch (err) {
    error.innerHTML = "Input is invalid";
  } finally {console.log ('inside finally block');}
  if (inputLength() > 0) {
      error.innerHTML = "";
    createListElement();
  }
}


// adds list items after clicking enter key
function addListAfterKeypress(event) {
  error.innerHTML = "";
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
