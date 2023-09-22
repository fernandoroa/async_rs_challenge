// intentionally failing, see other files of this folder
function printDouble(number, number2){
  setTimeout(
    () => {
      console.log(`${number} * 2 + ${number2} = `)
      const result = number * 2 + number2
      console.log(result)
      return result
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll(){
  let result = printDouble(5, 0)
  result = printDouble(10, result)
  result = printDouble(22, result)
  result = printDouble(1, result)
  result = printDouble(89, result)
}
console.log("'previous' value undefined, see other files")

printAll()