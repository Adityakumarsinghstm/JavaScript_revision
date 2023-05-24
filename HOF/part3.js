let pattern = "pw"
const regxOne = new RegExp(pattern)

let flag = "gi"
const regxTwo = new RegExp(pattern,flag)

let regxThree = /pw/gi

const checkToString = "PW is growing rapidly and Pwskills is working on pwcontent"

const result = regxThree.test(checkToString)
console.log(result)

const anotherResult = checkToString.match(regxThree)
console.log(anotherResult)

const oneMoreResult = checkToString.replace(regxThree,"p-w")
console.log(oneMoreResult)

const webUrl = "http://pwskills.com/aditya%20kumar"
const usableUrl = webUrl.replace(/%\d\d/, "-")
console.log(usableUrl)


