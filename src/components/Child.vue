<template>
  <h2>Child子级组件</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="emitFunc1">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Child',
  props: ['msg'],
  // setup在beforeCreate之前执行，且只执行一次
  // 由此推断：setup在执行时，当前组件还未创建，即意味着实例对象this无法使用
  // this是undefined，不能不能通过this来访问data/computed/methods/props
  // 其实所有的composition API相关回调函数中也都不可以
  // 数据初始化的生命周期回调
  // beforeCreate() {
  //   console.log('beforeCreate')
  // },
  // 界面渲染完毕
  // mounted() {
  //   console.log('mounted')
  // },

  // props 是一个对象，里面有父级传给子级的数据，并且在子级组件中使用props接收到的所有属性
  // context 也是一个对象，里面有 attrs对象（获取当前组件上未在props中声明接收的所有属性对象）、emit方法（分发事件）、slot对象（插槽）
  // setup(props, context) {
  setup(props, { attrs, slots, emit }) {
    // console.log(props, context)

    function emitFunc1() {
      // context.emit('func1', '++')
      emit('func1', '++')
    }

    return {
      emitFunc1,
    }
  }
})
</script>

<style scoped>

</style>
