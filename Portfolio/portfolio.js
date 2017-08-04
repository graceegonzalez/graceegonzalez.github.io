//window.alert("Welcome To Grace Gonzalez's Portfolio");
function styleAbout() {
  document.getElementById("styleAbout").innerHTML = "A favorite pastime of mine is photography!";
}

var slideIndex = 1; //First, set the slideIndex to 1. (First picture)
showIMG(slideIndex); //Then call showIMG() to display the first image.

//When the user clicks one of the buttons call plusIMG().
function plusIMG(n) {
    showIMG(slideIndex += n);
}
//The plusIMG() function subtracts one or  adds one to the slideIndex.

//The showIMG() function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex.
function showIMG(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
//If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to zero.
//If the slideIndex is less than 1 it is set to number of elements (x.length).
