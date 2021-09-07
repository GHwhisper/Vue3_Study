<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：页面打开后看到一个数据，点击按钮，数据发生变化

  // vue2实现方式
  // data() {
  //   return {
  //     count: 0,
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.count ++
  //   }
  // }

  // vue3实现方式
  // setup是组合API的入口函数
  setup() {
    // let count = 0 // 此时的数据并不是响应式的
    // ref作用：定义一个响应式数据，返回一个reference（Ref）对象，其中有一个value属性，如果需要对数据进行操作，需要通过该Ref对象调用value的方式进行操作
    // html模板中不需要.value写法
    // ref一般用来定义一个基本数据类型的响应式数据
    const count = ref(0)
    console.log(count)

    function updateCount() {
      count.value ++
    }

    return {
      count,
      updateCount
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
