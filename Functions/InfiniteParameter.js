function sumOfAllNumber()
{
    let sum =0
    for (let i = 0; i < arguments.length;i++)
    {
        sum+=arguments[i]
    }
    return sum
}
const result = sumOfAllNumber(1,2,3,4,5)
console.log(result)