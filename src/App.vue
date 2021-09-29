<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></List>
      <Footer :todos="todos" :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos"></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'
// 引入接口
import { Todo } from '@/types/todo'
import { saveTodos, readTodos } from '@/utils/localStorageUtils'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    // 定义一个数组数据
    const state = reactive<{ todos: Todo[] }>({
      todos: []
    })
    // 界面加载完毕后，过会儿读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 500)
    })

    // 添加数据的方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }

    // 删除数据
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }

    // 修改 isCompleted 状态
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
    }

    // 全选/全不选的方法
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach(todo => todo.isCompleted = isCompleted)
    }

    // 清除全部已完成
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter(todo => !todo.isCompleted)
    }

    // 监视：如果 todos 数组变化，则缓存
    // watch(() => state.todos, value => {
    //   saveTodos(value)
    // }, { deep: true })
    // （优化写法）
    watch(() => state.todos, saveTodos, { deep: true })

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos,
    }
  }
})
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
