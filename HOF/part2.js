let arr = [12, 34, 31, 43, 59]
arr.forEach(function (element,index, arr) {
    console.log(index , element,arr)
})

arr.forEach((element,index, arr) => {
    console.log("arrow" ,index , element,arr)
})

const cricketer = ["virat", "sachin", "gill", "ishan","samrat"]
cricketer.forEach(function (cr) {
    console.log(cr.toUpperCase())
})
arr.map(function (element, index, arr,) {
    console.log(element,index,arr)
})
cricketer.map((cr) => console.log(cr.toUpperCase()))
const cricketerEndsWith = cricketer.filter((cre) =>{
    return cre.endsWith('rat' )
})
console.log(cricketerEndsWith)

const cartBill = [12, 23, 46, 33]
const sumOfBills = cartBill.reduce((pre, curr)=> pre+curr , 0)
console.log(sumOfBills)

const gameScore = [200,310, 300, 231, 456, 643]
const gameScoreCheck = gameScore.every((v) => typeof (v) === 'number')

console.log("check :", gameScoreCheck)

const findAbove200 = gameScore.find((score) => score > 200)
console.log(findAbove200)