var str    = 'yрок-3-был слишком легкий';
var newStr = str[0].toUpperCase()+ str.slice(1);
console.log(newStr);
console.log(newStr.replace( /-/g, ' ' ));
var newStr2 = newStr.substr(19,4)+'oo';
console.log(newStr2);
var arr = [20, 33, 1, 'человек', 2, 3];
var summ = 0;
for (let i = 0; i <= 5; i++) {
	if (typeof(arr[i]) !== 'string'){
		summ += Math.pow(arr[i],2);
		console.log(summ);
	}
}
console.log(Math.sqrt(summ));