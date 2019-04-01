var button = document.getElementById("enter");
var clear = document.getElementById("clear");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = [];
var index = 0;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var complete = document.createElement("input");
	var del = document.createElement("button");
	
	div.classList.add("list-wrapper");
	div.classList.add("visible");
	div.classList.toggle("visible");

	var item = {
		thisDiv: div,
		itemIndex: index
	};
	index++;

	complete.type = "checkbox";
	complete.addEventListener("click",function(){
		li.classList.toggle("done");
	});

	del.appendChild(document.createTextNode("Delete"));
	del.addEventListener("click",function(){
		ul.removeChild(div);
		listItems.splice(item.itemIndex,1);
		for(var i = item.itemIndex;i < listItems.length;i++){
			listItems[i].itemIndex -=1;
		}

		
	});

	li.classList.add("done")
	li.classList.add("listElem");
	li.classList.toggle("done");

	

	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	div.appendChild(complete);
	div.appendChild(del);
	listItems.push(item);
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
	input.value = "";
	listItems = [];
}

button.addEventListener("click", addListAfterClick);

clear.addEventListener("click", clearListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);