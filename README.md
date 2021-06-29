# js-practice

## 3. Classes and inheritance
```JS
// RootElement <= Box <= instances

class RootElement {
  constructor(tagName = 'div') {
    this.$el = document.createElement(tagName)
    this.$el.style.marginBottom = '20px'
  }

  hide() {
    this.$el.style.opacity = '0'
  }

  show() {
    this.$el.style.opacity = '1'
  }

  append() {
    document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el)
  }
}

class Box extends RootElement {
  constructor(color, size = 150, tagName) {
    super(tagName)
    this.color = color
    this.size = size
  }

  create() {
    this.$el.style.background = this.color
    this.$el.style.width = this.$el.style.height = `${this.size}px`

    this.append()

    return this
  }
}

class Circle extends RootElement {
  constructor(color) {
    super()

    this.color = color
  }

  create() {
    this.$el.style.borderRadius = '50%'
    this.$el.style.width = this.$el.style.height = `120px`
    this.$el.style.background = this.color

    this.append()

    return this
  }
}

const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue').create()

const circle = new Circle('green').create()

circle.$el.addEventListener('mouseenter', () => {
  circle.hide()
})

circle.$el.addEventListener('mouseleave', () => {
  circle.show()
})
```

![class](src/3_classes.png)

## 2. Define a method for all arrays (using the prototype)
```JS
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
````

![obj](src/2_arr.png)

## 1. Creating and configuring an object

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

![obj](src/1_obj.png)