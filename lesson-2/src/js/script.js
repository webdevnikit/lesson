

var MainList = {
    Money      : prompt('Какой у вас бюджет ?'),
    StoreName  : prompt('Название вашего магазина'),
    ShopGroups : [],
    open : true,
}
let x = 5 ;

for (let i = 1; i <= 5; i++ ){
	let a = prompt('Какой тип товаров будем продовать ?'); 
	if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length <50 ){
		MainList.ShopGroups[i] = a;
		console.log('is Good '+i);
	} else{
		i--;
	}
}

console.log('Ваш бюджет на 1 день ' + MainList.money/30);
