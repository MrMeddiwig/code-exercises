// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);

// const moreNumbers = Array.from('hello');
// console.log(moreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const personalData = [36, 'Max', {moreDetail: []}];
// const hobbies = ['DnD', 'Coding', 'Drawing'];
// const analyticsData = [];

// hobbies.push('Gardening');
// hobbies.unshift('More Coding');
// const poppedStuff = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Drawing';
// hobbies[5] = 'Reading';
// console.log(hobbies);

// hobbies.splice(1, 0, 'Cooking');
// console.log(hobbies);

// const removedHobbies = hobbies.splice(0, 1, 'Gaming');

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }
// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj);
// });
// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     return priceObj;
// });
// const sortedPrices = prices.sort((a, b)=> {
//    if (a > b) {
//     return -1;
//    } else if (a === b) {
//     return 0;
//    } else {
//     return 1;
//    }
// });


// console.log(sortedPrices);

// const filteredArray = prices.filter(p => p > 6);


// console.log(filteredArray);

// let sum = 0;

// prices.sforEach((prices) => {
//     sum += price
// });

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = 'maryland;10.99;2000';
// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];

// console.log(transformedData);

// const nameFragments = ['Max', 'Lewis'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('');
// // nameFragments.push('Ser');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{name: 'Max', age: 36}, {name: Lauren, age: 34}, {name: 'Brian', age: 37}];
// const copiedPersons = [...persons.map(person => ({
//     name: person.name,
//     age: person.age
// }))];

// persons.push({name: 'Logan', age: 40});
// persons[0].age = 300;
// console.log(persons, copiedPersons);

const nameData = ['Max', 'Lewis'];
// const firstName = nameData[0];
// const lastName = nameData[1];


const [firstName, lastName] = nameData;
