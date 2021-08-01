var n = 1000;
var i = 0;
var result = 0;

for(i=0; i < n; i++){
    if(i % 3 == 0 || i % 5 == 0)
    result += i;
}
console.log('The summation of all multiples of 3 and 5 below 10: ', result);