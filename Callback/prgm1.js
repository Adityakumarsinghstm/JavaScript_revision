// function h(x, fn)
// {
//     console.log(x * x)
//     fn(x*x)
// }
// h(8, function (){
//      console.log("Done with callback function...")
// })

// function exe(n)
// {
//     console.log("Squared value ", n)
// }
// h(9,exe)

console.log("Start")
setTimeout(function ()
{
    console.log("Timer Done !!")
}, 3000)
console.log("End")