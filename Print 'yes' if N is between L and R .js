// Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
// Sample Testcase :
// INPUT
// 3
// 2 6
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
var N = +userInput[0];
var [L,R] = userInput[1].split(" ").map(Number);
// console.log(N,L,R);
if(N > L && N < R){
    console.log("yes");
}
else{
    console.log("no");
}

//end-here
});
