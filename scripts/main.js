var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/spooky.png'){
        myImage.setAttribute('src', 'images/spooky2.png');
    } else {
        myImage.setAttribute('src', 'images/spooky.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var storedName = prompt('Please enter your name.');
    localStorage.setItem('name', storedName);
    myHeading.textContent = 'Welcome to Spooktober, ' + storedName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Spooktober, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}