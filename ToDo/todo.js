class ToDoEntry { 
	constructor(toDoText){
		this.toDoText=toDoText;
	}

}


function addEntryToDo() {
	var text = document.getElementById("toDoEntryText").value;
	

  //Create new blog entry
  	var toDoEntry = new ToDoEntry(text); /*pass in name and blog text as parameters*/

  //Add the new entry, name and date to the blog
  	createToDoEntryElement(toDoEntry);


  //Clear the inputs

   	clearInputs();

}
function clearInputs() {  
   	document.getElementById("toDoEntryText").value = "";

   }
var id=0;


function createToDoEntryElement(toDoEntry) {
	var toDoText = toDoEntry.toDoText;

	var span = document.createElement("span");

	var div = document.createElement("div");

	span.className="toDoEntry"
	span.innerHTML =toDoText;
	var toDoDetails = document.getElementById("toDoDetails");




	toDoDetails.appendChild(span);
	toDoDetails.appendChild(createNewCheckBox(id));
	toDoDetails.appendChild(div);
	id++;
}

function createNewCheckBox(id){
	var checkbox=document.createElement('input');
	checkbox.type='checkbox';
	checkbox.id=id;
	return checkbox;
}
