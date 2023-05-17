var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");



// Yang Exist sudah 
listItems.forEach((item) => {


	item.addEventListener("click",function(){
	item.classList.toggle("done");
	});


	const deleteButton = document.createElement("Button");
	const space = document.createTextNode(" ");

	deleteButton.textContent = "Delete This";

	item.appendChild(space);
	item.appendChild(deleteButton);



	deleteButton.addEventListener("click", function(){
		item.remove();
	})


})





//asal takan button or keypressed enter, it will trigger ani.

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	var space = document.createTextNode(" ");

	deleteButton.textContent = "Delete This";



	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(space);
	li.appendChild(deleteButton);



	deleteButton.addEventListener("click", function (){

		li.remove();
	})


	li.addEventListener("click",function(){
	li.classList.toggle("done");
	});

	input.value = "";


}


function inputLength() {
	return input.value.length;
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


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);