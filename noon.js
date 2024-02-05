const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
//cheap product:
const maxPrice = 50;
const cheap= items.filter(item => item.price <= maxPrice);
console.log(cheap);
//expensive product in the array:
const minPrice= 500;
const expensive= items.filter(item => item.price >= minPrice);
console.log(expensive);
// full price of all products combined
const fullPrice = items.reduce((total, item) => total + item.price, 0);
console.log(fullPrice);
//remove products that are under $10
const remove = items.filter(item => item.price >= 10);
console.log(remove);
// product that will be start with letter b at first postion
const letter= items.filter(item => item.name.toLowerCase().startsWith('b'));
console.log(letter);
