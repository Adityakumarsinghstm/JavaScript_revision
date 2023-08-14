const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
// myArray.push(9)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift(3)
// console.log(myArray)

// console.log(myArray.indexOf(4))
// console.log(myArray.includes(13))

// const newArray = myArray.join()
// console.log(myArray)
// console.log(newArray)

const myn1 = myArray.slice(1, 3);
console.log("A  ", myArray)
console.log(myn1)

console.log("B ", myArray)


const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("C ", myArray)