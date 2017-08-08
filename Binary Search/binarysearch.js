var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];

document.getElementById('array').innerHTML = array;

// searchFor=document.getElementById('numberInput').value;
// binarySearch(searchFor);

function binarySearch() {
  searchElement=document.getElementById('numberInput').value;
  var minIndex = 0;
  var maxIndex = array.length - 1;
  var currentIndex;
  var currentElement;

  while(minIndex<=maxIndex){
    currentIndex=(minIndex + maxIndex)/2|0;
    currentElement=array[currentIndex];
    console.log(currentIndex)

    if(currentElement==searchElement){
      document.getElementById('number').innerHTML="Your number has been found. Its index is: "+currentIndex;
      break;
    }

    else if(currentElement<searchElement){
      minIndex=currentIndex+1;
    }
    else if(currentElement>searchElement){
      maxIndex=currentIndex-1;
    }

    else {
      document.getElementById('number').i
      InnerHTML="Your number is not in this array";
    }
  }
}
