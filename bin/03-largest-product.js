'use strict'

// 03.) Write a program that:
//    - Given an array of integers, find the pair of adjaent integers
//      that returns the largest product and return that product.

const largestProduct = (array) => {
  let product = 0
  for (let i = 0; i < array.length; i++) {
    const adjacentProduct = array[i] * array[i + 1]
    if (adjacentProduct > product) {
      product = adjacentProduct
    }
  }
  return product
}

largestProduct([1, 2, 10, 1])
