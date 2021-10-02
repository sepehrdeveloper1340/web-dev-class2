var number = parseInt(prompt("enter number"));
var remainder = number % 2;
console.log(remainder)
if(remainder == 0){
    console.log("it s even number")
}else if(remainder == 1){
    console.log("odd")
}else{
    console.log("wrong number")
}
// if( number % 2 == 1 ){

//     console.log("odd")
// }

// var num1 = parseInt(prompt("enter your number for reminder"))
// var num2 = parseInt(prompt("enter your number for reminder"))
// var operator = prompt("enter operator")
// if(
//     operator == "%"
// ){
//     console.log( num1 % num2)
// };

 var nam = prompt("enter nam")
 console.log(nam) 
 var dastur = prompt("دستورات را وارد کنید")
 if(dastur == "walk"){
     console.log(nam + " is walking")
 }else if(dastur == "run"){
     console.log(nam + " is running")
 }else{
    console.log("wrong command")
 }