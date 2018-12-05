
var MainList = {
    Money      : null,
    StoreName  : null,
		ShopGroups : [],
		Employers  : {},
		open       : false,
		price      : 100,
		discount	 : false,
		time       : null,
}
function start () {
	MainList.Money = prompt('Какой у вас бюджет ?');
	while ( isNaN(MainList.Money) || MainList.Money == '' || MainList.Money == null){
		MainList.Money =  prompt('Какой у вас бюджет ?');
	}
	MainList.StoreName = prompt('Название вашего магазина').toUpperCase();
	MainList.price = (MainList.discount == true)? MainList.price*80/100 : MainList.price;
	console.log(MainList.price);
}

function chooseShopGroups (){
	for (let i = 1; i <= 5; i++ ){
		let a = prompt('Какой тип товаров будем продовать ?'); 
		if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length <50 ){
			MainList.ShopGroups[i] = a;
		} else{
			i--;
		}
	}
}

function checkTimes (time) {
	if (time < 0 ) {
		console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20){
		console.log('Время работать !');
		} else if (time < 20 ){
			console.log('уже слишком поздно !');
			} else {
				console.log('в сутках только 24 часа');
			}
}

function hireEmployers (){
	for (let i = 1; i <= 4; i++){
		let a = prompt('Введитя имя сотрудника');
		if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length <50 ){
			MainList.Employers['employee'+i] = a;
		} else {
			i--;
		}
	}
}

start();
chooseShopGroups();
checkTimes(12);
hireEmployers();
alert("Ваш бюджет на 1 день " + MainList.money/30);