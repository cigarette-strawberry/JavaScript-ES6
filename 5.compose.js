// reduce   常见的功能  多个数据    最终变成了一个数据
let keys = ['name', 'age']
let values = ['wy', 18]
// { name: 'wy', age: 18 }   思考题

function sum(a, b) {
  return a + b
}
function toUpper(str) {
  return str.toUpperCase()
}
function add(str) {
  return '---' + str + '---'
}
console.log(add(toUpper(sum('xiaowu', 'xiaoyu'))))

// 第一种
/*
    // reduce 封装一个方法compose 组合多个函数
    function compose(...fns) {
        return function (...args) {
            let lastFn = fns.pop()
            return fns.reduceRight((a, b) => {
                // a 第一个参数 初始值或者计算后的返回值
                // b 第二个参数 当前的元素
                //   第三个参数 当前元素的索引
                return b(a)
            }, lastFn(...args))
        }
    }
    */

// 第二种
let compose =
  (...fns) =>
  (...args) => {
    let lastFn = fns.pop()
    return fns.reduceRight((a, b) => b(a), lastFn(...args))
  }

// 第三种
// function compose(...fns) {
//     return fns.reduce((a, b) => {
//         return (...args) => {
//             return a(b(...args))
//         }
//     })
// }

// 第四种
// funcs.reduce((a, b) => (...args: any) => a(b(...args)))

console.log(compose(add, toUpper, sum)('xiaoyu', 'xiaowu'))
