// try {
//     let x = undefined;
//     console.log(x[0]);
// }
// catch (err){
//     console.log("error found", err)
// }
// finally {
//     console.log("This is finally block")
// }

try
{
    console.log("Hello")
    console.log(a)
    console.log("ending try block")
}
catch (err){
    console.log("handled",err)
}
console.log("end")