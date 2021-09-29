<template>
  <li>
    <label>
      <input type="checkbox" v-model="isComplete" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo">删除</button>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
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
    updateTodo: {
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

    // 计算属性的方式，设置当前复选框的选中状态
    const isComplete = computed({
      get() {
        return props.todo.isCompleted
      },
      set(val) {
        // 设置是对于 t o d o 对象中的 isCompleted 属性操作
        props.updateTodo(props.todo, val)
      }
    })

    return {
      delTodo,
      isComplete,
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
