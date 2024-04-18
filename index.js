//The brains for website
function add(){
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    ans=x+y;
    document.getElementById("ans_box").value = ans;
}
function minus(){
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    ans=x-y;
    document.getElementById("ans_box").value = ans;
}
function multiply(){
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    ans=x*y;
    document.getElementById("ans_box").value = ans;
}
function divide(){
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    ans=x/y;
    document.getElementById("ans_box").value = ans;
}

function clear(){
    document.getElementById('myList').innerHTML = '';
    focuson("num1");
}

const arrowlocs = { // The locations of where the arrow keys can go depending on which element is focused
    "num1": {
        "ArrowDown": "num2",
        "Enter": "num2"
    },
    "num2": {
        "ArrowUp": "num1",
        "ArrowDown": "add",
        "Enter": "add"
    },
    "add": {
        "ArrowUp": "num2",
        "ArrowDown": "sub",
        "ArrowRight": "mul",
    },
    "sub": {
        "ArrowUp": "add",
        "ArrowRight": "div",
    },
    "mul": {
        "ArrowUp": "num2",
        "ArrowDown": "div",
        "ArrowLeft": "add",
        "ArrowRight": "clear",
    },
    "div": {
        "ArrowUp": "mul",
        "ArrowLeft": "sub",
        "ArrowRight": "clear",
    },
    "clear": {
        "ArrowLeft": "mul",
        "ArrowUp": "num2",
    }
}

funcs = {
    "add": add,
    "sub": minus,
    "mul": multiply,
    "div": divide,
    "clear": clear
}

function handle(current, dir) {
    alert(current);
    alert(dir);
    if (current in funcs && dir == "Enter") {
        funcs[current]();
        return;
    }
    const nexts = arrowlocs[current];
    for (const key in nexts) {
        if (key == dir) {
            focuson(nexts[key]);
            return;
        }
    }
}

function focuson(elmid) {
    alert(elmid);
    document.getElementById(elmid).focus();
}
