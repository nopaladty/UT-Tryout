Faktorial 5 = 5 * 4 * 3 * 2 * 1 = 120
Pattern:
Faktorial 5 = 5 * (5 - 1) * (5 -2) dst = 120
faktorial n = n * n - 1 * n - 2 dst = n!
*/

function factorial(num) {
  if(num === 1){
    return 1;
  }
  return num * factorial(num - 1);
}
/*
factorial(3)
3 * factorial(2)
3 * 2 * factorial(1)
3 * 2 * 1
*/

console.log(factorial(3));
