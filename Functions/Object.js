let obj1 = { id: 12, name: "rohit", salary: 20000 }
console.log(obj1)

const obj2 = new Object();
obj2.id = 23;
obj2.name="punit"
obj2.salary = 80000
console.log(obj2)

 function Emp(i,n,s) {
     this.id = i
     this.name = n
     this.salary = s
     
}
let obj3 = new Emp(34, "raunak", 70000)
console.log(obj3)
 
console.log(obj2.id)
console.log(obj2['name'])

delete obj2.id
console.log(obj2)