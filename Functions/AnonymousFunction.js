let x = function ()
{
    console.log("This is anonymous function")

}
x();
(function (x)
{
    console.log(x*x)
})(5);
(function exe(x, y) {
    console.log("self invoked function ", x + y)
})(4, 5);