var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.png'){
        myImage.setAttribute('src', 'images/spooky2.png');
        myImage.setAttribute('alt', 'A picture of a cute cat, just for fun!');
    } else {
        myImage.setAttribute('src', 'images/me.png');
        myImage.setAttribute('alt', 'A picture of me, Calvin Golas!');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my portfolio, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my portfolio, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
