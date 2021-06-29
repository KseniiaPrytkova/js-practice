// Implement the possibility using a prototype,
// that each array has a new method that allows you 
// to double the value of each element, given the data type, so that:
// 1. For numbers, this is squaring
// 2. For strings, this is a doubling of a string

// Example:
// [1, 2, 3] => [1, 4, 9]
// [5, 'Hello', 6] => [25, 'HelloHello', 36]

var a = [1, 2, 3]
var b = [5, 'Hello', 6]

Array.prototype.double = function() {
  var newArray = this.map(function(item) {
    if (typeof item === 'number') {
      return Math.pow(item, 2)
    }

    if (typeof item === 'string') {
      return item += item
    }
  })

  return newArray
}

var newA = a.double()
var newB = b.double()

console.log('A', newA.double())
console.log('B', newB)