const userName = prompt('Informe seu nome');

const element = document.querySelector('.title');

let message = document.createTextNode(`Welcome ${userName}!`);

element.appendChild(message);
