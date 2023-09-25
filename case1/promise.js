// https://stackoverflow.com/questions/54075878/promises-how-to-make-asynchronous-code-execute-synchronous-without-async-awa
// https://stackoverflow.com/questions/35318442/how-to-pass-parameter-to-a-promise-function
function printDouble(number){
  return new Promise(function(resolve, reject) {
    setTimeout(
      () => {
        console.log(`${number} * 2 =`)
        const result = number * 2
        console.log(result)
        resolve()
      }, 
      Math.floor(Math.random() * 100) + 1
    )  
  })
}
console.log("fixed order, using Promise")

printDouble(5)
.then(() => {
  return printDouble(10);
})
.then(() => {
  return printDouble(22);
})
.then(() => {
  return printDouble(1);
})
.then(() => {
  return printDouble(89);
})
