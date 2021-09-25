// var name = "sepehr";
// var age = 11;
// var lamp = true;
// var obj = {
//     myMotherName : "naimeh" 
//     , mybrother : "soheal"
// };

// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(lamp))
// console.log(typeof(obj))
var num1 = parseInt(prompt("enter your number for reminder"))
var num2 = parseInt(prompt("enter your number for reminder"))
var operator = prompt("enter operator")
if(operator == "*"){
    console.log(num1 * num2)
}else if(operator == "/"){
    console.log(num1 / num2)
}else if(operator == "+"){
    console.log(num1 + num2)
}else if(operator == "-"){
    console.log(num1 - num2)
}else {
    console.log("wrong operator")
}
