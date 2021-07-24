//Q: Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise print '-1' if the element not found.
//Sample Testcase :
//INPUT
//6 2
//1 2 3 5 7 8
//OUTPUT
//0

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
var [N,K] = userInput[0].split(" ").map(Number);
// console.log(N,K);
var elements = userInput[1].split(" ");
var count = -1;
// console.log(element);
for(let i = 0; i < N; i++){
    if(+elements[i] === K){
        count++;
    }
}
console.log(count);
//end-here
});
