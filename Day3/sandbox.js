//String
const title = 'Best reads of 2020';
const author = 'Cheryl';
const likes = 30;

//concatenation way
//let result = 'The blog called' + ' ' + title + ' ' + 'by' + ' ' + author + ' ' + 'has' + ' ' + likes + 'likes';

//template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);

// let html = `
//     <h2>${title}</h2>
//     <p>By ${author} </p>
//     <span> This blog has ${likes} likes </span>
// `;
// console.log(html);

let hsulay = ['name','gender','age'];
// hsulay[2]= 'height';
// console.log(hsulay[2]);

// let ages = [20, 24, 28, 30];
// console.log(ages[2]);

// let random = ['name','age', 24, 28];
// console.log(random);
// console.log(hsulay.length);

//array methods
//let result = hsulay.join('-');
//let result = hsulay.indexOf('gender');
//let result = hsulay.concat(['height','job']);
//let result = hsulay.push('height');
//result = hsulay.pop();
//console.log(hsulay);
//console.log(result);

// null & undefined
//let age = null;
//console.log(age, age+5,`the age is ${age}`);

// booleans & comparisons
console.log(true, false, "true", "false");

//methods can return booleans
let email = 'hsulayphyu77@gmail.com';
let names = ['justin','cheryl','bieber'];

//let result = email.includes('!');
//let result = names.includes('justin');
//console.log(result);

// comparison operators
let age=25;

// console.log(age == 25);
// console.log(age == 27);
// console.log(age != 27);
// console.log(age > 27);
// console.log(age < 27);
// console.log(age <= 25);

let name = 'justin';

// console.log(name == 'justin');
// console.log(name == 'Justin');
// console.log(name > 'bieber');
// console.log(name > 'Justin');
// console.log(name > 'Bieber');

// loose comparison (different types can equal)
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25'); 

// strict comparison (different types cannot equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//type conversion
let score = '100';
// score = Number(score);
// console.log(score + 1);
//console.log(typeof score);

//let result = Number ('hola');
//let result = String (50);
//let result = Boolean (102);
//let result = Boolean (0);
let result = Boolean ('0');

console.log(result, typeof result);
