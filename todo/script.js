var button = document.getElementById("enter");
var allButton = document.getElementById("all");
var completeButton = document.getElementById("complete");
var nCompleteButton = document.getElementById("notComplete");
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

	var item = {
		thisDiv: div,
		itemIndex: index,
		complete: false
	};
	index++;

	complete.type = "checkbox";
	complete.addEventListener("click",function(){
		li.classList.toggle("done");
		item.complete = !item.complete;
	});

	del.appendChild(document.createTextNode("Delete"));
	del.addEventListener("click",function(){
		ul.removeChild(div);
		listItems.splice(item.itemIndex,1);
		for(var i = item.itemIndex;i < listItems.length;i++){
			listItems[i].itemIndex -=1;
		}

		
	});

	li.classList.add("listElem");

	

	li.appendChild(document.createTextNode(input.value));
	div.appendChild(li);
	div.appendChild(complete);
	div.appendChild(del);
	listItems.push(item);
	ul.appendChild(div);
	input.value = "";
}


function allToggle(){
	listItems.forEach((item) =>{
		item.thisDiv.classList.remove("not-visible");
	});
}

function showComplete(){
	listItems.forEach((item)=>{
		if(item.complete === false){
			item.thisDiv.classList.add("not-visible");
		}else{
			item.thisDiv.classList.remove("not-visible");
		}
	});
}

function showNotComplete(){
	listItems.forEach((item)=>{
		if(item.complete === true){
			item.thisDiv.classList.add("not-visible");
		}else{
			item.thisDiv.classList.remove("not-visible");
		}
	});
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

allButton.addEventListener("click", allToggle);

completeButton.addEventListener("click", showComplete);

nCompleteButton.addEventListener("click", showNotComplete);