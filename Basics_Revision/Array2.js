const friend = ["Ankit", "Bambam", "Banti", "Rohit"]
const friend2 = ["Raghu", "Manish", "Kittu"]

// friend.push(friend2)
// console.log(friend);

// const allFrnd = friend.concat(friend2)
// console.log(allFrnd);

// const allfrnd = [...friend,...friend2]
// console.log(allfrnd)


const another_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10, 11, [12, 13]]]]
// console.log(another_array)
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));
const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3))
