var button = document.getElementById("enter");
var clear = document.getElementById("clear");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var complete = document.createElement("input");
	var del = document.createElement("button");
	div.classList.add("list-wrapper");
	complete.type = "checkbox";
	complete.addEventListener("click",function(){
		li.classList.toggle("done");
	});

	del.appendChild(document.createTextNode("Delete"));
	del.addEventListener("click",function(){
		ul.removeChild(div);
	});

	li.classList.add("done")
	li.classList.add("listElem");
	li.classList.toggle("done");

	li.appendChild(document.createTextNode(input.value));
	div.appendChild(complete);
	div.appendChild(del);
	div.appendChild(li);
	ul.appendChild(div);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function clearListAfterClick(){
	ul.innerHTML = "";
}

button.addEventListener("click", addListAfterClick);

clear.addEventListener("click", clearListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);