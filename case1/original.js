// intentionally random, see other files
function printDouble(number){
  setTimeout(
    () => {
      console.log(`${number} * 2`)
      console.log(number * 2)
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}
console.log("random order, when run several times")
function printAll(){
  printDouble(5)
  printDouble(10)
  printDouble(22)
  printDouble(1)
  printDouble(89)
}

printAll()