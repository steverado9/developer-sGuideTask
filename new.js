const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

const cbfn = (staffsDetail) => sum += staffsDetail.salary;

let sum = 0;
const theSum = staffsDetails.map(cbfn);
console.log(`task1 = output3(total), NGN ${sum}`);
console.log(theSum);



