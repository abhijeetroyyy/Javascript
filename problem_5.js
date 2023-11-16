// Problem-5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]function charToLower(char){
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function charToLower(char) {
  return char.toLowerCase();
}

function wordToLower(word) {
  return word.toLowerCase();
}

function arrayStringsToLower(arr) {
  return arr.map(wordToLower);
}

rl.question("Enter a list of words separated by commas: ", function(input) {
  let inputArray = input.split(","); 
  let output = arrayStringsToLower(inputArray);
  console.log(output);
  rl.close();
});
