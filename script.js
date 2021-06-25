
// document.getElementById("form").addEventListener("submit",function(e){
// e.defaultPrevented();
// });
// document.getElementById("sumit").onsubmit=function(e){
//     e.defaultPrevented();
// }
console.log("hello");
let a=document.getElementById("change");
a.onclick=function() {
    a.innerText="Day";
    document.body.classList.toggle("dark");
}
