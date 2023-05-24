let emp = { name: "rahul", id: 234, salary: 8000 }
let keys = Object.keys(emp);
console.log(keys)
let values = Object.values(emp)
console.log(values)
let enteries = Object.entries(emp)
console.log(enteries)

Object.seal(emp)
emp.id = 987
emp.address = "random"
console.log(emp)

let o = Object.assign({ x:78}, emp)

console.log(o)

