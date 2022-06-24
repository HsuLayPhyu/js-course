const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data);
        } else if(request.readyState ===4 ){
            reject('error getting resource');
    }
    });

    request.open('GET', resource);
    request.send();
    
    });
    
};

getTodos('luigi.json').then(data => {
    console.log('promise resolved:', data);
}).catch(error => {
    console.log('promise rejected:', error);
});

//promise example

// const getSomething = () =>{
//     return new Promise((resolve, reject) => {
//         //fetch
//         //resolve('some data');
//         reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// },(error) => {
//     console.log(error);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });

// getTodos('luigi.json', (error, data) => {
//     console.log(data);
//     getTodos('mario.json', (error, data) => {
//         console.log(data);
//         getTodos('shaun.json', (error, data) => {
//             console.log(data);
//             });
//         });
//     });

// console.log(1);
// console.log(2);
// getTodos((error, data) => {
//     console.log('callback fired');
    
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
//     });
//     console.log(3);
//     console.log(4);