let arr = [12, 3, 2, 45, 65, 73, 90]
console.log(arr)

arr.push(56)
console.log(arr)

let p = arr.pop()
console.log(p)

let s = arr.shift()
console.log(s)

arr.unshift(7)
console.log(arr)

let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
let arr3 = arr1.concat(arr2)
console.log(arr1, arr2, arr3)

let q = arr3.join(" + ")
console.log(q)

arr3.reverse()
console.log(arr3)

console.log(arr3.indexOf(5))

console.log(arr3.slice(2,5))