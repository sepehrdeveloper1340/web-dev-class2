var num1 = parseInt(prompt("enter number 1"));
var num2 = parseInt(prompt("enter number 2"));
var operator = prompt("enter operator");

switch(operator) {
    case "+" :
        console.log(num1 + num2)
        break
    case "-" :
        console.log(num1 - num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    case "/":
        console.log(num1 / num2)
        break
    default:
        console.log("wrong operator")
}