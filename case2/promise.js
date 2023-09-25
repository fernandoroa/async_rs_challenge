// https://stackoverflow.com/questions/54075878/promises-how-to-make-asynchronous-code-execute-synchronous-without-async-awa
// https://stackoverflow.com/questions/35318442/how-to-pass-parameter-to-a-promise-function
function printDouble(number, number2){
  return new Promise(function(resolve, reject) {
    setTimeout(
      () => {
        console.log(`${number} * 2 + ${number2} = `)
        const result = number * 2 + number2
        console.log(result)
        resolve(result)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  })
}
console.log("getting previous result in order with promise")

printDouble(5, 0)
.then(result => {
  return printDouble(10, result);
})
.then(result => {
  return printDouble(22, result);
})
.then(result => {
  return printDouble(1, result);
})
.then(result => {
  return printDouble(89, result);
})
