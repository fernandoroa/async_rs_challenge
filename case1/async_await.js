function printDouble(number){
  return new Promise(function(resolve) {
    setTimeout(
      () => {
        console.log(`${number} * 2 =`)
        const result = number * 2
        console.log(result)
        resolve(result)
      }, 
      Math.floor(Math.random() * 100) + 1
    )  
  })
}
console.log("fixed order, using async await")

async function run_print_double_sync() {
  await printDouble(5);
  await printDouble(10);
  await printDouble(22);
  await printDouble(1);
  await printDouble(89);
}
run_print_double_sync()