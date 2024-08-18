
// declaring variables screen and btn

var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

let history = document.getElementById('history');
// creating function to append data in history box
function calculation(v){
    para = document.createElement('p');
    data = v + " = " + eval(v);
    para.innerText = data;
    history.appendChild(para);
    return eval(v);
}

// for getting value of button, we use for loop
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        screen.value+=btntext;
    });
}
// creating functions to get desired results
function sin(){
    screen.value=Math.sin(screen.value);
}

function cos(){
    screen.value=Math.cos(screen.value);
}

function tan(){
    screen.value=Math.tan(screen.value);
}

function square(){
    screen.value=Math.pow(screen.value,2);
}

function cube(){
    screen.value=Math.pow(screen.value,3);
}

function sqrt(){
    screen.value=Math.sqrt(screen.value);
}

function cubert(){
    screen.value=Math.cbrt(screen.value);
}

 function pi(){
    screen.value= 3.14159265359;
}
//code for factorial
function fact(){
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}
//code for backspace
function backspc(){
screen.value=screen.value.substr(0,screen.value.length-1);
}