<template>
  <h2>toRaw和markRaw</h2>
  <h3>state: {{ state }}</h3>
  <hr>
  <button @click="textToRaw">测试toRaw</button>
  <button @click="textMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from 'vue'

interface IUserInfo {
  name: string
  age: number
  likes?: string[]
}

export default defineComponent({
  name: 'App',

  setup() {
    const state = reactive<IUserInfo>({
      name: '小明',
      age: 20
    })

    const textToRaw = () => {
      // 把代理对象变成了普通对象，数据变化，界面不变化
      const user = toRaw(state)
      user.name += '=='
      console.log(state)
    }
    const textMarkRaw = () => {
      // state.likes = ['吃', '喝']
      // state.likes[0] += '=='
      // console.log(state)

      const likes = ['吃', '喝']
      // markRaw 标记的对象数据，从此以后都不能再成为代理对象了
      state.likes = markRaw(likes)
      setInterval(() => {
        if (state.likes) {
          console.log('定时器执行')
          state.likes[0] += '== '
          console.log(state)
        }
      }, 1000)
    }

    return {
      state,
      textToRaw,
      textMarkRaw,
    }
  }
})
</script>

<style scoped>

</style>
