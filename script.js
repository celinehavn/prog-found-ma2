//Create an array called petArray with 3 string items in it: "cat", "cow", "dog"
var petArray = ["cat", "cow", "dog"];

//Console log the value of the second item in petArray
console.log(petArray[1]);

//Add the item "sheep" to petArray using the push method
petArray.push("sheep");
console.log(petArray);

//Console log how many items there are now in petArray using the length method
console.log(petArray.length);

//Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.
var catObject = {
  name: "Pusen",
  colour: "White",
  age: 8
}

//Console log the value of the third property of catObject
console.log(catObject.age);

//Take the value of catObject (the {} part) and place it inside an array called catArray
var catArray = [
  {
    name: "Pusen",
    colour: "White",
    age: 8
  }
]

//Loop through catArray and console log each property of each object inside (there will be only 1 object inside)
for(var index = 0; index < catArray.length; index++) {
console.log(catArray[index].name);
console.log(catArray[index].colour);
console.log(catArray[index].age);
}

//Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.
function logToConsole(logPassword){
  console.log(logPassword);
}

//Call the logToConsole function and pass in the value "donkey"
logToConsole("Pusen");
