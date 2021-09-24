<template>
  <h2>自定义hook函数操作</h2>
  <h2>x: {{ x }}, y: {{ y }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMousePosition from '@/hook/useMousePosition'

export default defineComponent({
  name: 'App',

  setup() {
    const { x, y } = useMousePosition()

    return {
      x,
      y,
    }
  }
})
</script>

<style scoped>

</style>
