function Product(n, p, r)
{
    this.name = n;
    this.price = p;
    this.rating = r;
}

let x = {
    p: Product
}
x.p("iwatch", 60000, 7)
console.log(x)
let p = new Product("macbook", 200000, 9)
console.log(p)
