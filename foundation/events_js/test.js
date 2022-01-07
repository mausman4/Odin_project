/*function alertFunction(){
    alert("This alert was triggered");
}

const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");
btn.onclick = alertFunction;


//event listener
const btn3 = document.querySelector('#btn-3');

btn3.addEventListener('click', () => {
    alert("You've woken me up!");
})


btn3.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});
*/

const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

