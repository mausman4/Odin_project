const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', () => {
    alert("You've woken me up!");
})