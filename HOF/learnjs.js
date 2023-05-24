const powerTwo = (n) =>
{
   return n ** 2
}
function powerCube(powerTwo, n)
{
    return powerTwo(n) * n
}
let result = powerCube(powerTwo, 3)
console.log(result)

function sayHello()
{
    return () => {
        console.log("Hii , Myself hitesh")
    }
}
let guessValue = sayHello()
console.log(guessValue)
guessValue()


const higerOderFun = n =>
{
    const twoFun = m =>
    {
        const oneFun = p =>
        {
            return m+n+p
        }
        return oneFun
    }
    return twoFun
}
console.log(higerOderFun(3)(4)(5))

let myArr = [1, 23, 4, 44, 12]
const arraySum = arr =>
{
    let total = 0
    arr.forEach(function (element) {
       total += element
    });
    return total
    
}

console.log(arraySum(myArr))

function oneMoreHello()
{
    console.log("Hey there Aditya !", Math.random())
}
// setInterval(oneMoreHello, 1000)
setTimeout(oneMoreHello,2000)
