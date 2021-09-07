<template>
  <div>hello world</div>
  <h1>{{ number }}</h1>
</template>

<script lang="ts">
// defineComponent 函数，目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';
// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',
  setup() {
    const number = 10
    return {
      number
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
