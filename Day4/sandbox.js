// for loops

// for(let i=0; i<5; i++){
//     console.log('in loop:',i);
// }
// console.log('loop finished');

const names = ['justin','hailey','bieber'];

// for(let i=0; i<names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }


//while loops

// let i=0;

// while(i<5){
//     console.log('in loop:',i);
//     i++;
// }

// let i=0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

//do while loops

// let i=3;

// do{
//     console.log('val of i is:', i);
//     i++;
// }while(i < 5);

// if statements

 const age=24;

// if(age>20){
//     console.log('you are over 20 years old');
// }

 const hsulay = ['cara','cheryl','justin','bieber'];
// if(hsulay.length >3){
//     console.log("that's a lot of nick names");
// }

//const password ='passwords';

// if(password.length >=8){
//     console.log("the password is long enough");
// }

//else if statements

// const password ='password1234';

// if(password.length>=12){
//     console.log('that password is mighty strong');
// } else if(password.length >=8){
//     console.log("the password is strong enough");
// }else {
//     console.log("the password is not strong enough");
// }

// logical operators - OR || and AND &&

const password ='p@ss';

if(password.length>=12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if(password.length >=8 || password.includes('@') && password.length >=5){
    console.log("the password is strong enough");
}else {
    console.log("the password is not strong enough");
}