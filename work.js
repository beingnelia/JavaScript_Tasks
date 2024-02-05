const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
//string that joins all elements of the colors array
const j= colors.join(', ');
console.log(j);
//splice() method
colors.splice(1, 2, 'purple', 'pink');
console.log(colors);
//copyWithin() method
colors.copyWithin(0, 1, 4);
console.log(colors);
//toUpperCase() method.
const v=colors.map(color => color.toUpperCase());
console.log(v);
// find() method
const p=colors.find(color => color.startsWith('b'));
console.log(p);
//slice() method 
const select=colors.slice(1, 4);
console.log(select);