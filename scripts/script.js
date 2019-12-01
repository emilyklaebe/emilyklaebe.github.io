// your script file for adding your own jquery

// Your Code from here on down. Don't delete that line above!
function reloadRandom() {

/* 1. Create named variables for each dynamic word.
2. Declare the variables as arrays.
3. Create a function that randomly chooses an element from the array.
4. Then places it in the appropriate spot. */

var names;
names = ["Victoria", "Michael", "Rob", "Verena", "Sidra"];

var hair;
hair = ["brown", "blonde", "black", "red", "white"];

var activity;
activity = ["to the mall", "to the beach", "grocery shopping", "bike riding", "to sleep"];

var randomNames = names
[Math.floor(Math.random()*names.length)];
console.log(randomNames);


var randomHair = hair
[Math.floor(Math.random()*hair.length)];
console.log(randomHair);

var randomActivity = activity
[Math.floor(Math.random()*activity.length)];
console.log(randomActivity);

document.getElementById("names").textContent = randomNames;

document.getElementById("hair").textContent = randomHair;

document.getElementById("activity").textContent = randomActivity;
  
}

reloadRandom();

var width = 10;
var height = 25;

var area = getArea(width, height);

getArea(width, height);

function getArea(w, h){
  //window.alert("Area=" + (width*height))
}

function greeting(theName, theIdentity, theNumber){
  return theName + " is the number " + theNumber + ""+ theIdentity + " on the campus";
}












// End of Your Code . Don't delete that line below!!