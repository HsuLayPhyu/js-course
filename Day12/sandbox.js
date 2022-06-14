const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value);
    //console.log(form.username.value);

    //validation

    const username = form.username.value;

    if(usernamePattern.test(username)){
        feedback.textContent = 'that username is valid!';
    }else{
        feedback.textContent = 'username must contain letters only & between 6 to 12 characters long';
    }
});

//live feedback

form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value);
    //console.log(e);
    if(usernamePattern.test(e.target.value)){
        console.log('success');
        form.username.setAttribute('class','success');
    } else{
        console.log('failed');
        form.username.setAttribute('class','error');
    }
});

//Testing RegularExpression
// const username = '123justin456';
// const pattern = /^[a-z]{6,}$/
//const pattern = /[a-z]{6,}/

// let result = pattern.test(username);

// if(result){
//     console.log('regex test passed :)');
// }else {
//     console.log('regex test failed :(')
// }

// let result = username.search(pattern);
// console.log(result);