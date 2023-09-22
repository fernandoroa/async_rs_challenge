// https://stackoverflow.com/questions/54075878/promises-how-to-make-asynchronous-code-execute-synchronous-without-async-awa
// https://stackoverflow.com/questions/35318442/how-to-pass-parameter-to-a-promise-function
function printDouble(number){
  return new Promise(function(resolve, reject) {
    setTimeout(
      () => {
        console.log(`${number} * 2`)
        resolve(number * 2)
      }, 
      Math.floor(Math.random() * 100) + 1
    )  
  })
}
console.log("fixed order, using Promise")

printDouble(5)
.then(result => {
  console.log(result);
  return printDouble(10);
})
.then(result => {
  console.log(result);
  return printDouble(22);
})
.then(result => {
  console.log(result);
  return printDouble(1);
})
.then(result => {
  console.log(result);
  return printDouble(89);
})
.then(result => {
  console.log(result);
})