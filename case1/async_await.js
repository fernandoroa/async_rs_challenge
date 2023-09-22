function printDouble(number){
  return new Promise(function(resolve) {
    setTimeout(
      () => {
        console.log(`${number} * 2`)
        resolve(number * 2)
      }, 
      Math.floor(Math.random() * 100) + 1
    )  
  })
}
console.log("fixed order, using async await")

async function run_print_double_sync() {
  let result = await printDouble(5);
  console.log(result); 
  result = await printDouble(10);
  console.log(result); 
  result = await printDouble(22);
  console.log(result); 
  result = await printDouble(1);
  console.log(result); 
  result = await printDouble(89);
  console.log(result); 
}
run_print_double_sync()