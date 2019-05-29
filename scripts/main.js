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
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Catacular, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Catacular, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
