// logical NOT 

let user = false;
if(!user){
    console.log('you must be logged in to continue');
}
console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i=0; i<scores.length; i++){
    
if(scores[i]===0){
    continue;
}
console.log('your score:', scores[i]);

if(scores[i]===100){
    console.log('congrats, you got the top score!');
    break;
}
}

// switch statements

const grade ='50';

switch(grade){
    case 50:
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    case 'C':
       console.log('you got a C!');
       break;
    case 'D':
        console.log('you got a D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}

// variable & block scope

let age = 30;
// let name = 'cara';
if(true){
    let name= 'cheryl';
    let age=25;
    console.log('inside 1st code block:', age,name);

    if(true){
       const age= 40;
        console.log('inside 2st code block:', age);
        // var test="hola";
    }
}

console.log('outside code block:', age,name);