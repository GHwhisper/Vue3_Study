<template>
  <h2>App父级组件</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="msg += '==='">更新数据</button>
  <hr>
  <child :msg="msg"></child>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Child from '@/components/Child.vue'

export default defineComponent({
  name: 'App',
  components: {
    Child,
  },
  setup() {
    const msg = ref('what are you doing')
    return {
      msg
    }
  }
})
</script>

<style scoped>

</style>
