function hello(){
    console.log("Hello");
}
setTimeout(hello,2000); //timeout:2s=2000ms
console.log("code 1");
console.log("code 2");
setTimeout(()=>{
    console.log("Praveen Singh Kuntia");
            },3000) //timeout:2s=2000ms

console.log("code 3");
console.log("code 4");


//Sum using Callback function

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum);
