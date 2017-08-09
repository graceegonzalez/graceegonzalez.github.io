function insertionSort(){

var initialArray=document.getElementById("arrayInput").value;
console.log(initialArray)
var array=initialArray.split(",").map(Number);
console.log(array)




for (sortedIndex=1;sortedIndex<array.length-1;sortedIndex++){
	var temp = array[sortedIndex];
	var unsortedIndex=sortedIndex;

	while (unsortedIndex>0&&array[unsortedIndex]<array[unsortedIndex-1]){
		array[unsortedIndex]=array[unsortedIndex-1];
		unsortedIndex=unsortedIndex-1;
		array[unsortedIndex]=temp;
	}	
}
document.getElementById("array").innerHTML=array;
console.log(array)
}
