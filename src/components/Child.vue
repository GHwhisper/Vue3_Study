<template>
  <h2>Child子级组件</h2>
  <h3>msg: {{ msg }}</h3>
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
  beforeCreate() {
    console.log('beforeCreate')
  },
  // 界面渲染完毕
  mounted() {
    console.log('mounted')
  },
  setup() {
    console.log('setup')
    return {

    }
  }
})
</script>

<style scoped>

</style>
