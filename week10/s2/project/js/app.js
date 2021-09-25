var riazi = parseInt(prompt("نمره ریاضی شما چند است؟"));
var fizik = parseInt(prompt("نمره فیزیک  شما چند است؟"));
var zist = parseInt(prompt("نمره زیست شما چند است؟"));
var miyangin = (fizik + riazi + zist) / 3;
console.log(miyangin)
if(miyangin >= 10) {
    alert("pass")
    console.log("pass")
    document.write("pass")
} else{
    alert("fail")
    console.log("fail")
    document.write("fail")
}
console.log(prompt)
