//reset parameter

const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num*2);
}

const result = double(1,3,5,7,9,2,4,6,8);
console.log(result);

//spread syntax (arrays)

const people = ['shaun','ryu','crystal'];
const members = ['justin','hailey',...people];
console.log(members);

// spread syntax (objects)

const person = {name: 'luffy', age: 30, job: 'pirate'};
const personClone ={...person, location: 'new world'};

console.log(personClone);

//sets
const nameArray = ['luffy','zoro','luffy','sanji','nami'];
console.log(nameArray);

//const namesSet = new Set(['luffy','zoro','luffy','sanji','nami']);
//const namesSet = new Set(nameArray);
//console.log(namesSet);

//const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(nameArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.delete(25);
console.log(ages, ages.size);
console.log(ages.has(25), ages.has(30));

ages.clear();
console.log(ages);

const pirates = new Set ([
    {name:'luffy', age: 22},
    {name:'zoro', age: 23},
    {name:'sanji', age: 24}
]);

pirates.forEach(pirate => {
    console.log(pirate.name, pirate.age);
});

//Symbols
const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const ninja = {};
ninja.age =30;
ninja['belt'] = 'red';
ninja['belt'] = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';
console.log(ninja);