// function createPromise() {
//   return new Promise(function exec(resolve, reject) {
//     setTimeout(function func() {
//       console.log("Timer completed...");
//     }, 1000);
//   });
// }

// async function execute() {
//   console.log("inside execute");
//   const response = await createPromise();
//   console.log("response is ", response);
// }
// execute();

const fun = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts')
  
    result = await result.json()
    console.log(result);

}
fun()

    
    
