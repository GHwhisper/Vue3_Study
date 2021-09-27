// shallowReactive（浅劫持，浅监视，浅响应数据）与 reactive（深的）

// 定义一个 reactiveHandler 处理对象
const reactiveHandler = {
  // 获取属性值
  get(target, prop) {
    const result = Reflect.get(target, prop)
    console.log('拦截了读取数据', prop, result)
    return result
  },
  // 修改属性值或添加属性
  set(target, prop, value) {
    const result = Reflect.set(target, prop, value)
    console.log('拦截了修改数据或添加属性', prop, value)
    return result
  },
  // 删除某个属性
  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop)
    console.log('拦截了删除数据', prop)
    return result
  }
}

// 定义一个 shallowReactive 函数，传入一个目标对象
function shallowReactive(target) {
  // 判断当前的目标对象是不是 object 类型（对象/数组）
  if (target && typeof target === 'object') {
    return new Proxy(target, reactiveHandler)
  }
  // 如果传入的数据是基本类型的数据，那么就直接返回
  return target
}

// 定义一个 reactive 函数，传入一个目标对象
function reactive(target) {
  // 判断当前的目标对象是不是 object 类型（对象/数组）
  if (target && typeof target === 'object') {
    // 对数组或对象中所有的数据进行 reactive 的递归处理
    // 先判断当前的数据是不是数组
    if (Array.isArray(target)) {
      // 数组的数据要进行遍历操作
      target.forEach((item, index) => {
        target[index] = reactive(item)
      })
    } else {
      // 再判断当前的数据是不是对象
      // 对象的数据要进行遍历操作
      Object.keys(target).forEach(key => {
        target[key] = reactive(target[key])
      })
    }
    return new Proxy(target, reactiveHandler)
  }
  // 如果传入的数据是基本类型的数据，那么就直接返回
  return target
}
