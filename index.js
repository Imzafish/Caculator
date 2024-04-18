//The brains for website
function focusnext() {
    document.getElementById("num2").focus();
}

function add(){
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    x = parseInt(x)
    y = parseInt(y)
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
