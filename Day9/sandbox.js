// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.aheadmandalay.com');
// link.innerText = 'Ahead Mandalay Website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
//mssg.setAttribute('class','success');

//mssg.setAttribute('style','color:green');

//const title = document.querySelector('h1');

//title.setAttribute('style','margin:50px;');
//console.log(title.style);
//console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'red';
// title.style.fontSize='50px';
// title.style.margin= '';

// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');
// content.classList.remove('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p =>{
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.innerText.includes('success')){
//         p.classList.add('success');
//     }

// });

// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');


const article = document.querySelector('article');
// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

// Array.from(article.children).forEach(child =>{
//     child.classList.add('article-element');
// });

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

//chining
console.log(title.nextElementSibling.parentElement.children);