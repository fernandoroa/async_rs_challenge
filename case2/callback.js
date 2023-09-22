// https://sentry.io/answers/asynchronous-callbacks-in-javascript/
function printDouble(number, number2, callback){
  setTimeout(
    () => {
      console.log(`${number} * 2 + ${number2} = `)
      const result = number * 2 + number2
      console.log(result)
      callback(result);
    }, 
    Math.floor(Math.random() * 100) + 1
  )  
}
console.log("getting previous result in order with callback")

printDouble(5, 0, function(result) {
  printDouble(10, result, function(result) {
    printDouble(22, result, function(result) {
      printDouble(1, result, function(result) {
        printDouble(89, result, function() {
        });
      });
    });
  });
});

