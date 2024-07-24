// const ids = new Set(['Go','Bonk','Set']);
// ids.add(2);

// console.log(ids);


// for (const entry of ids.entries()) {
//     console.log(entry[0]);
// }

// const person1 = {name: 'Max'};
// const person2 = {name: 'Lauren'};

// const personData = new Map([[person1, [{data: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}])

// console.log(personData);
// console.log(personData.get(person1));


// for (const [key, value] of personData.entries()) {
//         console.log(key, value);
// }

// for (const key of personData.keys()) {
//     console.log(key);
// }

// for (const value of personData.values()) {
//     console.log(value);
// }

let person = {name: 'Max'};
const persons = new WeakSet();

persons.add(person);



console.log(persons);

