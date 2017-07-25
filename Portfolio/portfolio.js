window.alert("Welcome To Grace Gonzalez's Portfolio");
function styleAbout() {
  document.getElementById("styleAbout").innerHTML = "A favorite pastime of mine is photography!";
}

var slideIndex = 1;
showIMG(slideIndex);

function plusIMG(n) {
    showIMG(slideIndex += n);
}

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
