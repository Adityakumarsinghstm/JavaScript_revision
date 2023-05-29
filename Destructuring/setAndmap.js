let mySet = new Set()
mySet.add(4)
mySet.add(45)
mySet.add(89)
let myArray = [12, 3, 33, 57]
// mySet.add(...myArray)
mySet.clear()
console.log(mySet)
// console.log(mySet.has(5))

function setDifference(setA, setB)
{
   return  new Set([...setA].filter(ele => !setB.has(ele)));
}

let map = new Map()
console.log(map)

let arr = [
    [1,"rohit"],
    [2,"vishnu"],
    [3,"manohar"],
    [4,"shiva"]
]

arr.map((arrItem) => map.set(arrItem[0], arrItem[1]));