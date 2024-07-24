const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const otherRandomNumber = Math.random(); // produces random number like the other one but different

if (randomNumber < 0.7) {
    alert("The number is greater than 0.7 Repent.");
}

if (otherRandomNumber > 0.7 && randomNumber > 0.7 ||
    otherRandomNumber < 0.2 || randomNumber < 0.2
) {
    console.log("The number is in the trigger zone.");
}

const someNumbers = [4, 8, 15, 16, 23, 42];

for (let i = someNumbers.length; i >= 0; i--) {
    console.log(someNumbers[i]);
}
let j = 0;
while (j < someNumbers.length) {
    console.log(someNumbers[j]);
    j++;
}