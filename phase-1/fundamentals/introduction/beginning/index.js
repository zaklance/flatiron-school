/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
// const, let
const apples = 65;
// apples = 5; // Not allowed because it is a const
let books = 5; // /* declare */
books = 25; /* assing */

/**
 * THis annotation test will appear when you hover over the next line and all the same code henceforth
 */
console.log(books)


console.log(books)

// ~ Types
// -> undefined, null*, boolean, number, string

// ~ Objects
// -> definition, bracket/dot notation, stringify
// An object is a collection of values that represent something
const animal = {
    species: 'cat',
    name: 'spot',
    age: 12,
    isChaoticEvil: true
};

console.log(animal);

console.log(animal.age);
console.log(animal['age']);

console.log(`${animal.name} is ${animal.age} years old`); // interpolation
console.log(animal.name + '  is ' + animal.age + ' years old!'); // concatenation
console.log(JSON.stringify(animal));

animal.isChaoticEvil = false;
console.log(animal.isChaoticEvil);
animal.weight = 13.4;

// ~ Arrays
// -> definition, access, modification
const prices = [12, 8, 24, 32];
console.log(prices);
console.log(prices[2]);
console.log(JSON.stringify(prices));

prices[0] = 5
console.log(prices);

// ~ Conditionals
// if, if-else, if-else-if-else, ternary

// if (boolean) (some code);
// if (itIsSunny) {wearSunglasses};
itIsSunny = true;
if (itIsSunny === true) {
    console.log('Wear sunglasses');
} else {
    console.log('Stay inside');
};

const action = itIsSunny ? 'Wear sunglasses' : 'Stay inside';
console.log(action);

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

/**
 * 
 * @param {string} name 
 * @param {string} day 
 * @returns 
 */
function sayHello(name, day) {
    console.log('Hi, ' + name + "! It's " + day + '.');
    return [];
};
sayHello('Amara', 'Tuesday');

const integers = [3, 9, 21, 27, 35]
function square(num) {
    console.log(num * num);
} // named fn as a parameter
integers.forEach((num) => {console.log(num * num);}); // anon fn as a param

const sq = (num) => {console.log(num * num);};

// ~ Scope
// -> global, local, closures, function hoisting

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
const numbers = [8, 12, 16, 24, 32]

// Version 1
function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}
console.log(sum(numbers));

// REDUCE
const sumTwo = numbers.reduce((total, current) => {
    total = total + current;
    return total;
}, 0)
console.log(sumTwo);

// Teacher version
function sumFinal(nums) {
    let total = 0;
    nums.forEach(num => total = total + num);
    return total;
}


// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
const numbersTwo = [1, 2, 3, 4, 5]

// numbersTwo.forEach((num) => {console.log(num * 2)}); // returns each object sting seperately
// MAP 1
const mapNumbers = numbersTwo.map((num) => num * 2)
console.log(mapNumbers)

// MAP 2
function double(num) {
    return num.map((numb) => numb * 2);
}
console.log(double(numbersTwo));

// forEach
function doubleTwo(array) {
    array.forEach((int, i) => {
        array[i] = int * 2
    });
}
console.log(doubleTwo(numbersTwo))

// TEACHER VERSION
function doubleFinal(nums) {
    let index = 0;
    nums.forEach(num => {
        nums[index] = num * 2;
        index++;
    });
};
console.log(doubleFinal);

// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
cityIcons = ['Apple', 'Windy', 'Foggy'];

// forEach
function lowercase(array) {
    let copyArray = array
    array.forEach((word, i) => {
        copyArray[i] = word.toLowerCase();
    });
    return copyArray;
};
console.log(lowercase(cityIcons));

// MAP
function lowercaseTwo(array) {
    return array.map(array => array.toLowerCase());
}
console.log(lowercaseTwo(cityIcons));

// Teacher Version
function lowercaseFinal(words) {
    let lowercased = [];
    words.forEach((word, i) => {
        lowercased[i] = word.toLowerCase();
    });
    return lowercased;
}
console.log(lowercaseFinal(cityIcons));