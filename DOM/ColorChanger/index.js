let button = document.getElementById("button")
function colorGenerator()
{
    let val = "123456789ABCDEF"
    let cons = "#"
    for (let i = 0; i < 6; i++)
    {
      cons = cons+val[Math.floor(Math.random()*16)]
    }
    return cons
}
function changeColor()
{
    document.body.style.backgroundColor = colorGenerator()
}
button.addEventListener("click",changeColor)