// vue 2.0 vue数据劫持 响应式原理 Object.defineProperty
// 不支持数组的更新 push slice splice

// Proxy就能实现 数组变化更新视图

// Proxy 和 Reflect 要搭配起来一起使用

// Proxy数据劫持 不仅监控到数组的内容 还有改变数组的长度
function update() {
  console.log('视图更新')
}
let arr = [1, 2, 3]
let proxy = new Proxy(arr, {
  set(target, key, value) {
    if (key == 'length') return true // 解决更新长度导致视图再次变化
    // console.log(arguments);
    update()
    // target[key] = value
    return Reflect.set(target, key, value) // 反射 把值反射到原数组中
  },
  get(target, key) {
    // console.log(arguments);
    // return target[key]
    return Reflect.get(target, key)
  },
})
// proxy[0] = 100
proxy.push(1)
console.log(proxy)
