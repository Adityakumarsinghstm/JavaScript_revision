class Product{
    // name;
    // price;
    // rating;
    #rating
    constructor(n,p,r)
    {
        console.log("calling the constructor....")
        this.name = n;
        this.price = p;
        this.#rating = r;

        // return 10; if you're returning premitive then it will be ignored by constructor
        //return { x: 12, y: "samsung" } //if you are returning non-premitive then it will be return 
        
    }
    set ratingSetter(r)
    {
        if (r < 0) return;
        this.#rating = r;
    }
    get ratingGetter()
    {
        console.log(this.#rating)
    }
    static custom()
    {
        console.log("calling static method......")
    }
    display()
    {
        // console.log("this refers to ",this)
        console.log("displaying the current product ",this.name, this.price, this.#rating)
    }
}
const p = new Product("iphone", 100000, 8);
// Product.custom()
console.log(p)
p.ratingSetter = 40;
p.ratingGetter;
p.display()