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
	div.className = "checkContainer"
	div.id = id;

	span.className="toDoEntry";
	span.innerHTML =toDoText;
	var toDoDetails = document.getElementById("toDoDetails");


	div.appendChild(createNewCheckBox());
	div.appendChild(span);

	toDoDetails.appendChild(div);
	id++;
}

function deleteEntryToDo(toDoEntry) {
	var containers = document.getElementsByClassName("checkContainer");

	var boxes = document.getElementsByClassName('chk');
    var texts = document.getElementsByClassName('toDoEntry');

    var numChecked = 0;


    for(var i = 0; i<containers.length; i++){
        div = containers[i];

        check = div.getElementsByClassName("chk")[0];
        if(check.checked){
        	numChecked++;
        }
    }

	while(numChecked > 0){
		for(var i = 0; i<containers.length; i++){
        	div = containers[i];

        	check = div.getElementsByClassName("chk")[0];
        	if(check.checked){
        		console.log("Removing " + div);
            	document.getElementById(div.id).remove();
            	numChecked--;
        	}
    	}
    }


}

function createNewCheckBox(){
	var checkbox=document.createElement('input');
	checkbox.className="chk";
	checkbox.type='checkbox';
	return checkbox;
}
