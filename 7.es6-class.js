// ES6 静态属性 私有属性(实例上的属性) 公有属性
class Person {
  // 静态属性和方法只能通过类的名字去调用
  static num = 123 // es7 支持静态的属性
  static flag() {
    // es6 只支持静态的方法
    console.log(1111)
  }

  // 类的访问器   相当于 Object.defineProperty 的 get()和set()方法
  static get a() {
    return 1
  }
  static set a(value) {
    console.log(value)
  }

  constructor(name) {
    this.name = name
    this.eat = '水果'
  }
  age = 12 // ES7 不是原型上的，是实例上的
  address() {
    console.log(this) // => undefined
    console.log('北京')
  }
  drink() {
    console.log('父')
  }
}
// Person()   类不能当成函数调用
let p = new Person()
let address = p.address
address() // es6规范中，如果单独调用原型上的方法 this 是不存在的
Person.flag()

class Son extends Person {
  constructor(name) {
    // 写了constructor必须要写supper
    super(name) // 这里的super指向的是父类  相当于是调用了  Person.call(this, name)  这个方法
  }
  drink() {
    super.drink() // super = Super.prototype 子类原型的方法中指向父类的原型
    console.log('子')
  }
}
let s = new Son()
s.address()
console.log(s.eat)
// console.log(s.flag()) // => 报错
console.log(Son.flag()) // 注意下 静态方法可以被继承，但不能被实例继承
s.drink()
console.log(Son.a)
