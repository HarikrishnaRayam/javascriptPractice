// Given a number N, print 'yes' if it is composite else print 'no'.
// Sample Testcase :
// INPUT
// 123
// OUTPUT
// yes


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
var num = +userInput[0];
var i;
var count = 0;

for(i=1; i<=num; i++)
{
 if(num % i === 0)
 count++;
}
if(count > 2)
 console.log("yes")
else
console.log("no")  //end-here
});
