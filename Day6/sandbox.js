//returning values

const calcArea = function(radius){
    // let area =3.14 * radius**2;
    // return area;
    return 3.14 * radius**2;
};
const area = calcArea(5);
console.log(area);

const name= 'justin';

//functions

const greet = () => 'hello';

let result1 = greet();
console.log(result1);

//methods
let result2 = name.toUpperCase();
console.log(result2);

//arrow function

const calArea = radius => 3.14 * radius**2;

const era = calArea(4);
console.log('Area is',era);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i=0; i<products.length; i++){
//         total += products[i]+ products[i]*tax;
// }
// return total;
// }

const bill = (products, tax) =>{
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i]+ products[i]*tax;
}
return total;
}
console.log(bill([10,15,20], 0.2));

//callbacks & foreach

const myFunc = (callbackFunc) => {
    let value =50;
    callbackFunc(value);
};

myFunc( value => {
     console.log(value);
 });

 let people = ['justin','cheryl','hailey','bieber','oscar'];

 const logPerson = (person, index) => {
     console.log(`${index} - hello ${person}`);
 };
    people.forEach(logPerson);

//  people.forEach((person, index) => {
//      console.log(index, person);
//  });

const ul= document.querySelector('.people');

let html = ``;
people.forEach(person => {
    html += `<li style= "color: red"> ${person}</li>`;
});

console.log(html);

ul.innerHTML = html;