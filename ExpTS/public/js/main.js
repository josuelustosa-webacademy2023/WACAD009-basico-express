const userName = prompt('Informe seu nome');

const element = document.querySelector('.title');

let message = document.createTextNode(`Bem-vindo(a) ${userName ? userName : 'Zé Ninguém'}!`);

element.appendChild(message);
