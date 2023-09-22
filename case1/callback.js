// https://sentry.io/answers/asynchronous-callbacks-in-javascript/
function printDouble(number, callback){
  setTimeout(
    () => {
      console.log(`${number} * 2`)
      console.log(number * 2)
      callback();
    }, 
    Math.floor(Math.random() * 100) + 1
  )  
}
console.log("fixed order, using callback")

printDouble(5, function() {
  printDouble(10, function() {
    printDouble(22, function() {
      printDouble(1, function() {
        printDouble(89, function() {
        });
      });
    });
  });
});

