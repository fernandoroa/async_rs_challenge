function printDouble(number, number2){
  return new Promise(function(resolve) {
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
console.log("getting previous result in order with async await")

async function run_print_double_sync() {
  let result = await printDouble(5, 0);
  result = await printDouble(10, result);
  result = await printDouble(22, result);
  result = await printDouble(1, result);
  await printDouble(89, result);
}
run_print_double_sync()