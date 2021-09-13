
// I have used jquery here instead of using javascript. DOM manipulation is easy with jquery.
$( document ).ready(function() {            // it needs a ready function to start.
    
var a = 0;
var add = function(valueToAdd) {
    a += valueToAdd;
    document.getElementById('value').innerHTML = a;
}                                                               //add button logic

var reset = function() {
	a = 0;
	document.getElementById('value').innerHTML = 0;
}                                                               //reset button logic

var subtract = function() {
	a =a-1;
    if(a>=1)
	document.getElementById('value').innerHTML = a;
    else{
        a = 0;
        document.getElementById('value').innerHTML = 0;
    }
}                                                                 // subtract buttion logic

// selected html documents using jquery. which uses id or class to pick DOM elements.
var addButton = document.querySelector("#add");
var resetButton = document.querySelector("#reset");
var subtractButton = document.querySelector("#subtract");


//on click events
addButton.addEventListener("click", function() {
	add(1);
})

resetButton.addEventListener("click", function() {
	reset();
})

subtractButton.addEventListener("click", function() {
	subtract(1);
})

});