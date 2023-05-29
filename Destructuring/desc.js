//Spread Operator
const oneArray = [1, 2, 3, 4]
const twoArray = [5,6,7,8]

// const threeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray,twoArray]
const threeArray = [...oneArray,...twoArray]
console.log(threeArray)

function manyArg()
{
    console.log(typeof(arguments))
    let args = Array.from(arguments)
    let finalArr = args.map(e => e * 2)
    console.log(finalArr)
}
//Rest Operator
function manyArgsv2(...args)
{
    console.log( typeof(args))
    let finalArr = args.map(e => e)
    console.log(finalArr)
 }
// manyArg(1,2,3,4,5)
// manyArgsv2(1,2,3,4,5)

const name = ["rohit", "raunak"]
const newName = ["punit", ...name, "subham"]
// console.log(newName)

const sitName = "pwskills"
console.log([...sitName])

function pwskills (...values)
{
    return values
}
console.log(pwskills("subham","vicky","mohit","saurabh"))