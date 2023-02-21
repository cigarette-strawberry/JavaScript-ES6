// 装饰器   草案语法 可以修饰类的属性   类原型的方法
// 修饰的时候 就是把这个类的属性传递给修饰函数
// @connect @withRoute react中的写法 都是语法糖

// @flag('工程师2')
class Person {
  @readOnly
  name = 'xiaowu'
  @before
  address(a, b) {
    console.log(a, b)
  }
}
/* function flag(constructor) {   // @flag 不传参的写法
    constructor.type = '工程师'
  } */
function flag(value) {
  return function (constructor) {
    constructor.type = value
  }
}
// target 类的原型, property 装饰器的属性, descriptor 属性的描述器
function readOnly(target, property, descriptor) {
  descriptor.writable = false
}
function before(target, property, descriptor) {
  let oldValue = descriptor.value // 获取原来的内容
  descriptor.value = function () {
    console.log('say')
    oldValue.call(target, ...arguments)
  }
}
flag('工程师3')(Person) // @flag('') 等同于这行代码
console.log(Person.type)
let p = new Person()
// p.name = 'xiaoyu'
console.log(p.name)
p.address(1, 2)
