// your script file for adding your own jquery

// Your Code from here on down. Don't delete that line above!
function reloadRandom() {

/* 1. Create named variables for each dynamic word.
2. Declare the variables as arrays.
3. Create a function that randomly chooses an element from the array.
4. Then places it in the appropriate spot. */

var occupation;
occupation = ["graphic designer", "day-dreamer", "multidisciplinary designer", "visual communicator", "web designer", "type-lover", "branding strategist"];

var work;
work = ["tight-knit teams", "process-driven teams", "life-long learners", "thoughtful teams", "office dogs", "Murder, She Wrote fanatics", ];

var fields;
fields = ["fashion", "music", "film", "publications", "literature"];

var randomOccupation = occupation
[Math.floor(Math.random()*occupation.length)];
console.log(randomOccupation);


var randomWork = work
[Math.floor(Math.random()*work.length)];
console.log(randomWork);

var randomFields = fields
[Math.floor(Math.random()*fields.length)];
console.log(randomFields);

document.getElementById("occupation").textContent = randomOccupation;

document.getElementById("work").textContent = randomWork;

document.getElementById("fields").textContent = randomFields;
  
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