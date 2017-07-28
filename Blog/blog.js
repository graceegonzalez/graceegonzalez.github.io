class BlogEntry { //name, blogText
	constructor(name,blogText){
		this.name=name;
		this.text=blogText;
	}

}

function addEntryToBlog() {
	var name = document.getElementById("blogEntryName").value;
	var text = document.getElementById("blogEntryText").value;

  //Create new blog entry
  	var blogEntry = new BlogEntry(name,text); /*pass in name and blog text as parameters*/

  //Add the new entry, name and date to the blog
  	createBlogEntryElement(blogEntry);
	createFooterElement(blogEntry);

  //Clear the inputs

   	clearInputs();

}
function clearInputs() {  
   	document.getElementById("blogEntryName").value = "";
   	document.getElementById("blogEntryText").value = "";

   }

function createBlogEntryElement(blogEntry) {
	var bloggerText = blogEntry.text;

	var div = document.createElement("div");
	div.className="blogEntry"
	div.innerHTML =bloggerText;
	var blogDetails = document.getElementById("blogDetails");
	blogDetails.appendChild(div);
}

function createFooterElement(blogEntry) {
	var bloggerName = blogEntry.name;


	var div = document.createElement("div");
	div.className="blogDate";
	div.innerHTML = "by" + bloggerName + " " + Date();
	var blogDetails = document.getElementById("blogDetails");
	blogDetails.appendChild(div);


}
