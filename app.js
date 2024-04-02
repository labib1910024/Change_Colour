const button = document.querySelector("button");
const body =document.querySelector("body");
const color =['red','blue','green','black','yellow','purple'];

body.style.backgroundColor = 'white';

button.addEventListener('click',function func(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex]
})

