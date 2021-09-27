<template>
  <h2>customRef的使用</h2>
  <input type="text" v-model="keyword">
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, customRef } from 'vue'

// 自定义 hook 防抖的函数
// value传入的数据，数据类型不确定，故使用泛型；delay 时间间隔，默认200ms
function useDebounceRef<T>(value: T, delay = 200) {
  let timeOutId: number

  return customRef((track, trigger) => {
    return {
      // 返回数据
      get() {
        // 告诉 Vue 追踪数据
        track()
        return value
      },
      // 设置数据
      set(newValue: T) {
        // 清理定时器
        clearTimeout(timeOutId)
        // 开启定时器
        timeOutId = setTimeout(() => {
          value = newValue
          // 告诉 Vue 更新界面
          trigger()
        }, delay)
      }
    }
  })
}

export default defineComponent({
  name: 'App',
  setup() {
    // const keyword = ref('abc')
    const keyword = useDebounceRef('abc', 500)

    return {
      keyword
    }
  }
})
</script>

<style scoped>

</style>
