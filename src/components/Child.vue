<template>
  <h2>Child子级组件</h2>
  <h4>msg: {{ msg }}</h4>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

export default defineComponent({
  name: 'Child',
  // vue2.x中的生命周期钩子
  beforeCreate() {
    console.log('2.x beforeCreate')
  },
  created() {
    console.log('2.x created')
  },
  beforeMount() {
    console.log('2.x beforeMount')
  },
  mounted() {
    console.log('2.x mounted')
  },
  beforeUpdate() {
    console.log('2.x beforeUpdate')
  },
  updated() {
    console.log('2.x updated')
  },
  // vue2.x中的 beforeDestroy 和 destroyed 在 vue3 中分别改为 beforeUnmount 和 unmounted
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  setup() {
    console.log('3.0 setup')

    const msg = ref('abc')
    const update = () => {
      msg.value += '==='
    }

    onBeforeMount(() => {
      console.log('3.0 onBeforeMount')
    })
    onMounted(() => {
      console.log('3.0 onMounted')
    })
    onBeforeUpdate(() => {
      console.log('3.0 onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('3.0 onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('3.0 onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('3.0 onUnmounted')
    })

    return {
      msg,
      update,
    }
  }
})
</script>

<style scoped>

</style>
