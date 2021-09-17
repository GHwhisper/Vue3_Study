<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>性别：{{ user.gender }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <hr>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求： 显示用户的相关信息，点击按钮可以更新
  /**
   * 作用: 定义多个数据的响应式
   * const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
   * 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
   * 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
   */
  setup() {
    const obj = {
      name: '小明',
      age: 20,
      wife: {
        name: '小甜甜',
        age: 18,
        cars: ['奔驰', '宝马', '奥迪']
      }
    }
    // 把数据变成响应式的数据
    // 返回的是一个Proxy的代理对象，被代理的对象就是obj对象
    // user现在是代理对象，obj是目标对象
    // user对象的类型是Proxy
    const user = reactive(obj)

    console.log(user)

    const updateUser = () => {
      // user.name += '=='
      // user.age += 2
      // user.wife.name += '=='
      // user.wife.cars[0] = '玛莎拉蒂'

      // user-->代理对象，obj-->目标对象
      // user对象或者obj对象添加一个新属性，哪种方式会影响界面更新
      // obj.gender = '男' // 该方式不会使界面更新界面
      // user.gender = '男' // 该方式界面会更新，而且这个数据最终也添加到了obj对象中

      // user对象或者obj对象中移除一个已经存在的属性，哪种方式会影响界面更新
      // delete obj.age
      // delete user.age

      // 通过当前的代理对象找到该对象中的某个属性，更改该属性中的某个数组的数据
      user.wife.cars[1] = '玛莎拉蒂'
      // 通过当前的代理对象把目标对象中的某个数组属性，添加一个新的属性
      user.wife.cars[3] = '奥拓'
    }

    return {
      user,
      updateUser,
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
