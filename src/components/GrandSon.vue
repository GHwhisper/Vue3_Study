<template>
  <h3 :style="{ color }">GrandSon孙子组件</h3>
  <button @click="color = 'blue'">蓝色</button>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'GrandSon',
  setup() {
    const color = inject('color')

    return {
      color,
    }
  }
})
</script>

<style scoped>

</style>
