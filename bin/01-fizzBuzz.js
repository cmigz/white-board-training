'use strict'

// 01.) Write a program that:
//    - Prints all the numbers between 1-100
//      - If the # is divisible by 3, print "Fizz"
//      - If the # is divisible by 5, print "Buzz"
//      - If the # is divisible by 3 & 5, print "FizzBuzz"

const fizzBuzz = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(100)
