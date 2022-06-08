//object literals

// const blogs =[
// { title: 'why mac & cheese rules', likes: 30},
// {title: '10 things to make with marmite', likes:50}
// ];

//console.log(blogs);

let user ={
    name: 'cheryl', 
    age: 24,
    email: 'cheryl@gmail.com',
    location: 'mandalay',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes:50}
     ],
    
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach( blog =>{
            console.log(blog.title, blog.likes);
        })
    }

};

user.login();
user.logout();
user.logBlogs();

console.log(this);

console.log(user);
console.log(user.name);

//user.age =35;
console.log(user.age);

const key = 'location';

console.log(user['location']);
user['name'] = 'justin';
console.log(user['name']);

console.log(typeof user);

const name= 'mario';
name.toUpperCase();

//Math objects

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random*100));

//primitive values

// let score1= 50;
// let score2 = score1;

// console.log(`score1: ${score1}`, `score2: ${score2}`);

// score1 =100;
// console.log(`score1: ${score1}`, `score2: ${score2}`);

//reference values

const user1= {name: 'ryu', age:24};
const user2= user1;

console.log(user1, user2);

user1.age =30;
console.log(user1, user2);