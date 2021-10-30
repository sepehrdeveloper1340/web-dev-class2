// function num () {
//     var number = parseInt(prompt("enter number"))
//     for (let i = 0; i <= number; i++){
//         document.write(i + "<br>")
//         }
// }

// num()
function factor (num) {
    var numi = parseInt(prompt("enter number"))
    var factorial = 1;
    for(var i = 1; i <= numi ; i++){
        factorial = factorial * i
    }

    return factorial
}

console.log(factor(3))