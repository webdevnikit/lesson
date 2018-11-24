var Money = + prompt('Какой у вас бюджет ?');
var StoreName = prompt('Название вашего 555 магазина');
var MainList = {
    money      : Money,
    storeName  : StoreName,
    shopGroups : [],
    open : true,
}
MainList.shopGroups[0] = prompt('Какой тип товаров будем продовать ?','Car');
MainList.shopGroups[1] = prompt('Какой тип товаров будем продовать ?','House');
MainList.shopGroups[3] = prompt('Какой тип товаров будем продовать ?','Phones');
console.log('Ваш бюджет на 1 день ' + MainList.money/30);
