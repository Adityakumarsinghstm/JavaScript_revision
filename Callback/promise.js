function createPromise()
{
    return new Promise(function exec(resolve, reject)
    {
        setTimeout(function func()
        {
            console.log("Timer completed...")
        },1000)
        
    })
}
console.log("Start")
let x = createPromise()
console.log("end")