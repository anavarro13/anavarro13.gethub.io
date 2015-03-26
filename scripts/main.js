var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/logo_variant_it.png') {
		myImage.setAttribute ('src','images/icon_of_logo.png');
	} else {
		myImage.setAttribute ('src','images/logo_variant_it.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is Cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
