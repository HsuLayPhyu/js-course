const scores = [10,25,30,15,50,40,5];

// const filterdScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filterdScores);

const users = [
    {name: 'justin', premium:true},
    {name: 'hailey', premium:false},
    {name: 'cheryl', premium:false},
    {name: 'bieber', premium:true}
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);

//map mathod
const prices = [20,10,30,25,15,40,80,5];

// const salePrices = prices.map((price) => price/2);
// console.log(salePrices);

const products =[
    {name: 'gold star', price:20},
    {name: 'mushroom', price:40},
    {name: 'green shells', price:30},
    {name: 'banana skin', price:10},
    {name: 'red shells', price:50}
];

const saleProducts = products.map(product => {
    if(product.price > 30){
        //product.price = product.price/2;
        //return product;
        return {name:product.name, price:product.price/2};
    } else {
        return product ;
    }
});
console.log(saleProducts);

//reduce method
const rscores = [10,20,60,40,70,90,30];

const result = rscores.reduce((acc, curr) => {
    if (curr >50){
        acc++;
    }
    return acc;
}, 0);
console.log(result);

const points = [
    {player: 'luffy', point:50},
    {player: 'zoro', point:70},
    {player: 'sanji', point:40},
    {player: 'luffy', point:80},
    {player: 'luffy', point:60},
    {player: 'zoro', point:70},
    {player: 'sanji', point:40},
    {player: 'luffy', point:90},
    {player: 'luffy', point:20},
    {player: 'zoro', point:70},
    {player: 'sanji', point:40},
    {player: 'luffy', point:100},
];
const luffyTotal = points.reduce((acc, curr) => {
    if(curr.player === 'luffy'){
        acc += curr.point;
    }
    return acc;
}, 0);

console.log(luffyTotal);