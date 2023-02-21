// ... 展开运算符
// 合并数组   合并对象
let school = { name: 'xiaowu' }
let my = { name: 'xiaoyu', age: { count: 18 } }
let newMy = { ...my, age: { ...my.age } }
let all = { ...school, ...newMy }
my.age.count = 200
console.log(all)
// 深拷贝 拷贝后无关；浅拷贝 拷贝后有关

// Object.assign 等同于 ...

// 先把对象转换成字符串 再把字符串转换成对象
let school = {
  name: 'xiaowu',
  fn: function () {},
  a: undefined,
  b: null,
  arr: [1, 2, 3]
}
let my = { name: 'xiaoyu', age: { count: 18 } }
let all = JSON.parse(JSON.stringify({ ...school, ...my }))
my.age.count = 200
console.log(all)

// 自己实现深度拷贝   (递归拷贝，一层层的拷贝)
// typeof   instanceof   constructor   Object.prototype.toString.call()
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (typeof obj !== 'object') return obj
  // array object
  // constructor
  // 如果拷贝的对象存在，直接从 WeakMap 中返回即可
  if (hash.has(obj)) return hash.get(obj)
  let cloneObj = new obj.constructor()
  hash.set(obj, cloneObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }
  return cloneObj
}
let obj = {
  school: { name: 'xiaowu' },
  fn: function () {},
  a: undefined,
  b: null,
  arr: [1, 2, 3]
}
obj.xxx = obj // => 循环引用，进入死循环
let n = deepClone(obj)
n.school.name = 'qqqq'
console.log(obj)

// map weakMap set 集合 map 映射

/* ----------------------------------------------------- */

// 深拷贝若是遇到递归爆栈怎么解决

/* ----------------------------------------------------- */

// ES6 最重要的知识:let   const   块级作用域    解构赋值    箭头函数    class定义类(继承)   promise(同异步)
// var obj1 = { name: "xiaowu" }
// var obj2 = { age: 18 }
// let o = { ...obj1, ...obj2 }
// 扩展(展开)运算符（ spread ）是三个点（...）   ...是一个浅拷贝    1.合并数组和对象
// console.log(o);

// 深拷贝，拷贝后无关   浅拷贝，拷贝后有关

// Object.assign   等同于...(展开)运算符

// JSON.stringify 和 JSON.parse 可以达到深拷贝的目的   它的原理是：  先把对象转换成字符串，再把字符串转换成对象
let a = { name: 'xiaowu' }
let b = { name: 'xiaoyu', age: { count: 18 } }
let c = JSON.parse(JSON.stringify({ ...a, ...b }))
b.age.count = 20
console.log(c)

// var obj1 = { name: "xiaowu" }
// var obj2 = { age: 18 }
// var obj = {}
// Object.assign(obj, obj1, obj2)
// console.log(obj);   //{age: 18, name: "xiaowu"}

// var obj1 = { name: "xiaowu" }
// var obj2 = { age: 18 }
// var obj = { sex: "男" }
// Object.assign(obj, obj1, obj2)
// console.log(obj);   //{sex: "男", age: 18, name: "xiaowu"}

var obj1 = { name: 'xiaowu' }
// var obj1 = { name: {} }
var obj2 = { age: 18 }
var obj = { age: 10 }
var a = Object.assign(obj, obj1, obj2)
// Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
// 对象的合并，如果属性名相同，则后面的将前面的覆盖掉
// 浅拷贝(克隆):目标对象中的属性值是引用源对象中的空间地址，当改变其中一个时，另一个也会随着发生改变，这就是浅拷贝
// 深拷贝(克隆):则不是同一个引用空间地址
console.log(obj) //{age: 18, name: "xiaowu"}
console.log(a) //{age: 18, name: "xiaowu"}
console.log(obj === a) //true     在同一个空间地址上操作   是一个浅拷贝而不是深拷贝
