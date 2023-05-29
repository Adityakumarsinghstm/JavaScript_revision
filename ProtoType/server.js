let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "flash", "superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpidermanPower: function () {
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function ()
{
    console.log("hitesh is present in all object")
}
console.log(myHeros.hitesh())
console.log(heroPower.hitesh())

Array.prototype.heyHitesh = function ()
{
    console.log(`Hitesh says Hii`)
}
console.log(myHeros.heyHitesh())
console.log(heroPower.heyHitesh())
