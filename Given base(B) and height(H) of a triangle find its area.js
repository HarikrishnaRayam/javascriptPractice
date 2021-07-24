// Given base(B) and height(H) of a triangle find its area.
// Input Size : N <= 1000000
// Sample Testcase :
// INPUT
// 2 4
// OUTPUT
// 4

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
var [base,height] = userInput[0].split(" ").map(Number);
var areaOfTriangle = (base*height)/2;
console.log(areaOfTriangle);

//end-here
});
