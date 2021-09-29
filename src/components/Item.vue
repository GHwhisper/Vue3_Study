<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Todo } from '@/types/todo'

export default defineComponent({
  name: 'Item',
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是 T o d o 类型
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    // 删除数据
    const delTodo = () => {
      // 提示
      if (window.confirm('确定删除吗？')) {
        props.deleteTodo(props.index)
      }
    }

    return {
      delTodo,
    }
  }
})
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li:hover {
  background-color: lightblue;
}

li:hover button {
  display: inline-block;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li::before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
