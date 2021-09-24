<template>
  <h2>App父级组件</h2>
  <button @click="isShow = !isShow">切换显示</button>
  <hr>
  <child v-if="isShow"></child>
</template>

<script lang="ts">
import Child from '@/components/Child.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Child,
  },
  setup() {
    const isShow = ref(true)

    return {
      isShow,
    }
  }
})
</script>

<style scoped>

</style>
