const display = () => console.log("Hello good morning")
display()
const add = (x, y) => (x + y)
let ans = add(3, 6)
console.log(ans)
 
const multi = (x, y) =>
{
    console.log(`multiplication of ${x} and ${y} is `, x*y)
}
multi(8, 3)

const both = (x, y) => ({ sum: x + y, substract: x - y })

let ans2 = both(9, 7)
console.log(ans2["sum"])
