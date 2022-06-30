//store data in local storage
// localStorage.setItem('name','Luffy');
// localStorage.setItem('age','22');

// //get data from local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

//updating data
// localStorage.setItem('name','Zoro');
// localStorage.age = '24';

// name = localStorage.getItem('name');
// age = localStorage.getItem('age');

// console.log(name, age);

//deleteting data from local storage
//localStorage.removeItem('name');
// localStorage.clear();

// name = localStorage.getItem('name');
// age= localStorage.getItem('age');
// console.log(name, age);

const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];
//console.log(JSON.stringify(todos));
localStorage.setItem('todos',JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));