// Problem-4
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function averageArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return sumArray(arr) / arr.length;
  }
}

rl.question("Enter a list of numbers separated by commas: ", function(input) {
  let inputArray = input.split(",").map(Number);
  let average = averageArray(inputArray);
  console.log("The average is: " + average);
  rl.close();
});