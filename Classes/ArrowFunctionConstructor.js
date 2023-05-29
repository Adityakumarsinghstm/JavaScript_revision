const Product =(n,p,r) => {
    this.name = n;
    this.price = p;
    this.rating = r;
}
const p = new Product("EarBud", 10000, 6)
console.log(p)