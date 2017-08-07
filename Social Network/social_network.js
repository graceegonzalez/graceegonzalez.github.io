/*
INSTRUCTIONS:

1. Create a list of 5 names of girls
2. Store 3 friends for each of these 5 girls
3. When the user enters the name of a girl from the list,
   and clicks "Get Friends" display friends of that girl
*/

var friendNames = {
  "josephine":["grace","oprah","ellen"],
  "grace":["josephine","kaylie","chloe"],
  "chloe":["kaylie","kristen","elmo"],
  "jacqueline":["melinda","rebekah","bella"],
  "nalini":["grace","michelle obama","steve jobs"],
}

document.getElementById('names').innerHTML = Object.keys(friendNames);

/*ENTER CODE HERE*/

function getFriends() {
  var nameInput = document.getElementById('nameInput').value;
  var newName = nameInput.toLowerCase();
  document.getElementById('friends').innerHTML = friendNames[newName];
}

/*EXTENSION*/

function addFriend() {
  var girlsFriend = document.getElementById('nameOfFriend').value;
  var girlsName = document.getElementById('nameOfGirl').value;
  var newgirlsFriend = girlsFriend.toLowerCase();
  var newgirlsName = girlsName.toLowerCase();
  friendNames[newgirlsName].push(newgirlsFriend);
}
