//change background of bosy to red
document.body.style.backgroundColor = "red";

//Change the background color of just the "about me" portion to blue
document.querySelector("h1").style.backgroundColor = "blue";
document.querySelector("h1").style.color = "white";

//Change the font-style of the entire document to sans-serif
document.querySelector("html").style.fontFamily = "sans-serif";

//Add your nickname
document.getElementById("nickname").innerHTML = "Varco";

//Add your favorites
document.getElementById("favorites").innerHTML = "TV";

//Add your hometown
document.getElementById("hometown").innerHTML = "Atlanta, GA";


//EXTRA CREDIT
//************************************
//Iterate through each li and change the class to "listitem".
var items = document.getElementsByTagName("li");
	for (var i = 0; i<items.length; i++){
		items[i].className = "listitem";		
	}
	
// Add a style tag that sets a rule for "listitem" to make the color red.
var x = document.getElementsByClassName("listitem");
for (i = 0; i < x.length; i++) {
	x[i].style.color = "red";
	x[i].style.backgroundColor = "green";
}

//Create a new img element and set its src attribute to a picture of you. Append that element to the page.
function myFunction() {
var x = document.createElement("IMG");
    x.setAttribute("src", "C:\Users\Adam\Desktop\Lamda\lswebhomework4\profile.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "Profile");
    document.body.appendChild(x);
}


