## Source

Translation of part of the challenge:  
https://github.com/rocketseat-education/bootcamp-launchbase-desafios-06/blob/master/desafios/06-1-mini-desafios.md

### ***Begin of translation:"*** Asynchronous functions

*Case1*  

Implement a function that takes a number as a parameter and, after x milliseconds (within a range of 1 to 100 ms. Use `setTimeout` and the `floor` and `random` functions from the [Math library](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math), show twice the received parameter in the console. Then call this function 5 times. Ex.:

```js
function printDouble(number){
  setTimeout(
    () => {
      console.log(number * 2)
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll(){
  printDouble(5)
  printDouble(10)
  printDouble(22)
  printDouble(1)
  printDouble(89)
}

printAll()
```

Without carrying out any processing, it is easy to see that the order of values shown in the console when calling the `printAll()` function is random and does not respect the order in which the functions are called. Therefore, to resolve this issue, handle `setTimeout` asynchronism using [callback](https://developer.mozilla.org/docs/Glossary/Callback_function), [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [async/await](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/await).

(Tip: when dealing with Promise, return a new Promise and use the `resolve` parameter).

*Case 2*  

Now, change your function a little. Two parameters will be passed, the first will be the value to be doubled and the second the value to be added to double of the first. Furthermore, instead of showing the result in the console, return it and pass it on in the next function call, for example:

```js
let result;

result = funcao(5, 0); // returning 10
result = funcao(12, result); // returning 34
result = funcao(2, result); // returning 38
```

Finally, handle this asynchronism again using [callback](https://developer.mozilla.org/docs/Glossary/Callback_function), [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [async/await](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/await).

### ***"End of translation***

### How to run

* Have `node` installed
* clone this repository
* In the system console, run `node` followed by the location/name of the file
