// set / map 是两种存储结构
let s = new Set([1, 2, 3, 1, 2, 3, 4, 5, 6])
console.log(typeof s) // => string array object boolean undefined symbol
// interator 是有迭代接口的
console.log([...s])

// 过滤 汇总 去重 排序 尾递归优化

// 集合: 并集   交集    差集
let a1 = [1, 2, 3, 4, 5, 6, 7]
let a2 = [1, 2, 3, 8, 9]

function union() {
  let s1 = new Set(a1) // 去重
  let s2 = new Set(a2) // 去重
  let s3 = [...new Set([...s1, ...s2])] // 合并再去重
  console.log(s3)
}
union()

// 交集
function intersetcion() {
  // 返回为true的留下
  return [...new Set(a1)].filter(item => {
    return new Set(a2).has(item)
  })
}
console.log(intersetcion())

// 差集
function diff() {
  return [...new Set(a1)].filter(item => {
    return !new Set(a2).has(item)
  })
}
console.log(diff())

let m = new Map()
m.set('name', 'xiaoyu')
m.set('name', 'xiaowu')
let obj = { name: 2 }
m.set(obj, '3') // 这个obj的引用空间地址被set所占用 销毁不了
obj = null // 把obj清空
console.log(m)
// V8引擎的垃圾回收机制

let map = new WeakMap() // WeakMap()   弱引用
function MyFn() {}
let fn = new MyFn()
map.set(fn, '123')
fn = null
