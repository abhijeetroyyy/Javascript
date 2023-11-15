// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
function abs(num){
    if(num<0){
      return -num
    }
    return num
  }
  function difference(a,b){
    let diff=a-b;
    let ans=abs(diff);
    console.log(ans);
  }
  difference(4,42)