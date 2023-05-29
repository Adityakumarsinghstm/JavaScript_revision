let score = 4
function one()
{
    let score = 3;
    console.log(score)
}
function two()
{
    let score = 5;
    console.log(score)

}
function three()
{
    console.log(score)
}
function outerFunc()
{
    let outerVar = `I am at scope level 1`
    function innerFunc()
    {
        let innerVal = `I am at scope level 2`
        console.log(outerVar)
    }
    console.log(innerVal)
    innerFunc()
}
// outerFunc()
// one()
// two()
// three()
// console.log(score)

let myGlobalVal = 0
function func()
{
    let val1 = 1
    console.log(myGlobalVal)

    function innerOfFunc()
    {
        let val2 = 2
        console.log(myGlobalVal, val1, val2)
        
        function innerOfInnerFunc()
        {
            let val3 = 3
            console.log(myGlobalVal,val3,val2,val1)
        }
        innerOfInnerFunc()
    }innerOfFunc()
}
// func()

const errorMesg = "file not found!!"
setTimeout(function callBack() {
      console.log(errorMesg)  
}, 1000)


let pageCount = 0
const items = [2, 3, 4, 23, 54]
items.forEach(function iterator(item) {
    pageCount++;
    console.log(item)
})
console.log( "page count", pageCount)