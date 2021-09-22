<template>
  <h2>App父级组件</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="msg += '==='">更新数据</button>
  <hr>
  <child :msg="msg" msg2="你好" @func1="func1"></child>
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

    function func1(txt: string) {
      msg.value += txt
    }

    return {
      msg,
      func1,
    }
  }
})
</script>

<style scoped>

</style>
