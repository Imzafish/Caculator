const prompt = require('prompt-sync')();
var number1 = prompt('Number_1: ');
var number2 = prompt('Number_2: ');
var operation_type = prompt('Operation?:')
operation_type.toLowerCase();
function add(Num_1,Num_2){
    return Num_1+Num_2
}
function multiply(Num_1,Num_2){
    return Num_1*Num_2
}
function minus(Num_1,Num_2){
    return Num_1-Num_2
}
function divide(Num_1,Num_2){
    return Num_1/Num_2
}


if (operation_type==="add"){
    let ans = add(Number(number1),Number(number2))
    console.log(ans);
}else if (operation_type==="multiply"){
    let ans = multiply(Number(number1),Number(number2))
    console.log(ans);
}else if (operation_type==="minus"){
    let ans = minus(Number(number1),Number(number2))
    console.log(ans);
}else if (operation_type==="divide"){
    let ans = divide(Number(number1),Number(number2))
    console.log(ans);
}else{
    console.log("Error, this operation type is not supported.");
}