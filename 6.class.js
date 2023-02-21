// ES6 类   ES5 构造函数
function Person(name) {
  this.name = name
  this.arr = [1, 2, 3]
}
Person.prototype.address = {
  location: '北京',
}
let a1 = new Person('xiaowu')
let a2 = new Person('xiaoyu')
console.log(a1.arr === a2.arr) // => false
console.log(a1.__proto__ == Person.prototype) // => true
console.log(Person.__proto__ == Object.prototype) // => false
console.log(Person.__proto__ == Function.prototype) // => true
console.log(a1.__proto__.__proto__ == Object.prototype) // => true
console.log(Object.prototype.__proto__) // => null

// -----------------------------

function Person(name) {
  this.name = name
  this.eat = '水果'
}
Person.prototype.address = {
  location: '北京',
}
function Son(name) {
  this.age = 20
  Person.call(this, name) // 继承私有的属性
}

// Son.prototype.__proto__ = Person.prototype // 共有继承
// Object.setPrototypeOf(Son.prototype, Person.prototype) // 共有继承
Son.prototype = Object.create(Person.prototype, { constructor: { value: Son } }) // 寄生式组合继承 共有继承
// Son.prototype = new Person() // 不推荐 污染父类

Son.prototype.hobby = function () {
  console.log('writeJS')
}
let s = new Son('xiaowu')
console.log(s.address)
console.log(s.eat)

// 推荐使用
// call + Object.create()
// call + Object.setPrototypeOf()

// ------------------------------
class Cash {
  // ... 待实现
}

const cash1 = new Cash(186)
const cash2 = new Cash(53)

const sum1 = cash1.add(cash2)
const sum2 = Cash.add(cash1, cash2)
const sum3 = new Cash(cash1 + cash2)

console.log(sum1)
console.log(sum2)
console.log(sum3)
// 要求均输出200-30-9
