document.body.style.backgroundColor = "#212121";
let z = document.getElementById("one");
let y = document.getElementById("two");
let x = document.getElementById("three");
let b = document.getElementById("bio");


z.addEventListener("click", myFunction)
function myFunction() {
	b.innerHTML = "i'm currently in chicago";
	z.classList.add("one");
	document.body.style.backgroundColor = "#609EC1";
	document.getElementById("bio").style.fontFamily = "Fredoka One, cursive";
	
}

y.addEventListener("click", myFunction2)
function myFunction2() {
	b.innerHTML = "i'm a taurus";
	y.classList.add("two");
	document.body.style.backgroundColor = "#404040";
	document.getElementById("bio").style.fontFamily = "Inconsolata, monospace";

}

x.addEventListener("click", myFunction3)
function myFunction3() {
	b.innerHTML = "i have 3 pets, 2 dogs and one cat";
	x.classList.add("three");
	document.body.style.backgroundColor = "#D37B60";
	document.getElementById("bio").style.fontFamily = "Open Sans Condensed, sans-serif";
	
}

// function 
// let one = document.querySelector("#myButton");
// one.addEventListener("click")