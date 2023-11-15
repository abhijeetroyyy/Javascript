
// Problem-3
// Write a function isOdd which returns a boolean value based on whether the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isodd(num)
{
  if (num %2==1)
  {
    return true;
  }
  return false;
}

function print(limit)
{
  for (let i=0;i<=limit;i++)
    {
      if(isodd(i) == true)
      {
        console.log(i)
      }
    }
}
print(15)