var num = 33721;
var message = " hello";

var num1 = Math.floor(num / 10000);
var num2 = Math.floor(num%10000/1000);
var num3 = Math.floor(num%10000%1000/100);
var num4 = Math.floor(num%10000%1000%100/10);
var num5 = Math.floor(num%10000%1000%100%10);
var summ = num1+num2+num3+num4+num5;
var mul  = num1*num2*num3*num4*num5;

console.log(summ);
console.log(Math.pow(mul,3));
