const p = document.createElement('p');
p.textContent = 'Hey I\'m red!';
p.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

const div = document.createElement('div');
div.setAttribute('style', 'border: 1px solid black; background-color: pink');

const h3_in_div = document.createElement('h1');
h3_in_div.textContent = "I'm in a div";

const p_in_div = document.createElement('p');
p_in_div.textContent = "ME TOO!";

div.appendChild(h3_in_div);
div.appendChild(p_in_div);





const body = document.querySelector('body');
body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);