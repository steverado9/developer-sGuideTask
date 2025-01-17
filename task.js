/*
Task 1
input 
const staffsDetails = [
  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
  { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
  { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
  { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

output 
"I am Jam Josh a staff of Royal Suites."
"I am Justina Kap a staff of Royal Suites."
"I am Chris Colt a staff of Royal Suites."
"I am Jane Doe a staff of Royal Suites."

output 2 
"index 0 : I am Jam Josh a staff of Royal Suites."
"index 1 : I am Justina Kap a staff of Royal Suites."
"index 2 : I am Chris Colt a staff of Royal Suites."
"index 3 : I am Jane Doe a staff of Royal Suites."

calculate and print the total salaries for all staff: output "NGN 900"

print the names of people whose salaries are greater than or equal to 4000 from the array of staff details
*/
const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

//output 1
const namesOfStaff = staffsDetails.map((staffsDetail) => `I am ${staffsDetail.name} a staff of Royal Suites`);
console.log('task1 = output 1(namesOfStaff)', namesOfStaff);

//output 2
let index = 0;
const namesOfStaffAndIndex = staffsDetails.map((staffsDetail) => `index ${index++} : I am ${staffsDetail.name} a staff of Royal Suites`);
console.log('task1 = output 2(namesOfStaffAndIndex)', namesOfStaffAndIndex);

//output 3
let sum = 0;
staffsDetails.forEach((staffsDetail) => sum += staffsDetail.salary);
console.log(`task1 = output3(total), NGN ${sum}`);

//output 4
const salariesGreaterOrEqualTo4000 = staffsDetails.filter((staffsDetail) => {
    if (staffsDetail.salary >= 4000) {
        console.log('task1 = output 4(staff names)', staffsDetail.name);
    }
});

/* 
Task 2
Square the value of every element in the array.
[1, 2, 3, 4, 5];
*/
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number ** 2);
console.log('task2 = squaredNumbers', squaredNumbers);

/*
Task 3
Sum of every positive element
[1, -4, 12, 0, -3, 29, -150];
*/

const integers = [1, -4, 12, 0, -3, 29, -150];

const sumPostiveNumbers = integers.reduce((sum, integer)=> {
    if (integer > 0) {
        sum += integer;
    }
    return sum;
}, 0);
console.log('task 3 = sumPostiveNumbers', sumPostiveNumbers);

/* 
Task 4
const scores = [12, 55, 70, 47];
calculate and print the total: output "NGN 900"
*/
const scores = [12, 55, 70, 47];

const totalOutput = scores.reduce( (sum, score) => sum += score, 0);
console.log('task4 = totalOutput', totalOutput);

/*
Task 5
return an array which will include all the cities having only the first letter of each city name capitalized.
const cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];

Expected Ouput 1: 
["Miami", "Barcelona", "Madrid", "Amsterdam", "Berlin", "Sao paulo", "Lisbon", "Mexico city", "Paris"];

 Expected Ouput 2: 
["1. Miami", "2. Barcelona", "3. Madrid", "4. Amsterdam", "5. Berlin","6. Sao paulo", "7. Lisbon","8. Mexico city",
  "9. Paris"]; */

const cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];

//output 1
const newCities = cities.map((city) => city.charAt(0).toUpperCase() + city.slice(1, city.length) );
console.log('task 5 = outpu1 newCities', newCities);

//output2
let i = 1;
const newCitiesAndIndex = cities.map((city) => `${i++}. ${city.charAt(0).toUpperCase() + city.slice(1, city.length)}`);
console.log('task 5 = outpu2 newCitiesAndIndex', newCitiesAndIndex);

/*
Task 6
 const array = [0, 1, , , , 5, 6];

Expected output 
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6
*/
const array = [0, 1, , , , 5, 6];
let expectedOutput = 0;
for (let i = 0; i < array.length; i++) {
    console.log(`task 6, Visisted index ${expectedOutput++} with value ${array[i]}`);
}

/*
Task 7
const array1 = [5, 12, 8, 130, 44];

return first element greater than 10 
// Expected output: 12
*/
const array1 = [5, 12, 8, 130, 44];

const firstElementGreaterThan10 = array1.find( (arr) => arr > 10);
console.log(`task 7 = firstElementGreaterThan10, ${firstElementGreaterThan10}`);

/*
Task 8
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

return element with name of cherries

// Expected output: { name: 'cherries', quantity: 5 }


return true or false if Apple is in the array of fruits 
Input: ["Banana", "Orange", "Strawberry", "Blueberry"]
*/
//task 8.1
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

const cherries = inventory.filter((inventory) => inventory.name === 'cherries');
console.log('task 8 = return object with cherries', cherries);

// task 8.2
const fruits = ["Banana", "Orange", "Strawberry", "Blueberry"];

const result = fruits.some((fruit) => fruit === 'Apple');
console.log('task 8 = contains Apple', result);

/*Task 9
Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
[3, 6, 8, 2] */
const myArray = [3, 6, 8, 2];

const numbersGreaterThan5 = myArray.filter((arr) => arr > 5);
console.log('task 9 = numbersGreaterThan5', numbersGreaterThan5);

/*Task 10
Given an array of numbers, return a new array that only includes the even numbers.
[3, 6, 8, 2] */

const wholeNumbers = [3, 6, 8, 2];

const evenNumbers = wholeNumbers.filter((wholeNumber) => wholeNumber % 2 === 0);
console.log('task 10 = evenNumbers', evenNumbers);

/*Task 11
Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
["dog", "wolf", "by", "family", "eaten", "camping"]*/
const randomWords = ["dog", "wolf", "by", "family", "eaten", "camping"];

const fiveCharactersOrLesser = randomWords.filter((randomWord) => randomWord.length <= 5 );
console.log('task 11 = fiveCharactersOrLesser', fiveCharactersOrLesser);

/*Task 12
Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
[
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
*/
const peopleObjects = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

const members = peopleObjects.filter((peopleObject) => peopleObject.member === true);
console.log('task 12 = array of members =', members);

/*Task 13
Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]*/
const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

const olderThan18 = people.filter((person) => person.age > 18);
console.log('task 13 = olderThan18', olderThan18);

/*
Task 14
Get all male characters
Get all female characters
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];*/

const characters = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: 188,
        mass: 84,
        eye_color: "blue",
        gender: "male",
    },
];
//male characters
const maleCharacters = characters.filter((character) => character.gender === "male");
console.log('task14 = maleCharacters', maleCharacters);

//female characters
const femaleCharacters = characters.filter((character) => character.gender === "female");
console.log('task14 = femaleCharacters', femaleCharacters);

/*Task 15
function that filters valid emails based on the presence of “@”.
 Input ["alice@gmail.com", "bob@", "charlie@domain.com", "dave"]
 Output ["alice@gmail.com", "bob@", "charlie@domain.com"]*/
const emails = ["alice@gmail.com", "bob@", "charlie@domain.com", "dave"];

const validEmails = emails.filter((email) => email.includes("@"));
console.log('task 15 = validEmails', validEmails);

















