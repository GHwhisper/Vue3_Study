<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName"><br />
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName"><br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1"><br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2"><br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3"><br />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'App',

  setup() {
    const user = reactive({
      firstName: '东方',
      lastName: '不败',
    })

    // vue3计算属性
    // 计算属性的函数中如果只传入一个回调函数，表示的是get
    // 返回一个Ref类型的对象
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName
    })
    // console.log(fullName1)

    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName
      },
      set(val: string) {
        // console.log('===', val)
        const names = val.split('_')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    const fullName3 = ref('')
    // 监视---监视指定的数据
    // immediate 页面渲染时立即执行一次，deep 深度监视
    watch(user, ({ firstName, lastName }) => {
      fullName3.value = firstName + '_' + lastName
    }, { immediate: true, deep: true })

    // 监视，不需要配置immediate，本身就会默认执行一次
    // watchEffect(() => {
    //   fullName3.value = user.firstName + '_' + user.lastName
    // })

    // 监视 fullName3，改变 firstName 和 lastName
    watchEffect(() => {
      const names = fullName3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    // watch---可以监听多个数据
    // 使用 watch 监听非响应式数据时，直接这样写，回调不会执行
    // watch([user.firstName, user.lastName], () => {
    //   console.log('===')
    // })
    // 改用如下写法，回调会执行
    watch([() => user.firstName, () => user.lastName], () => {
      console.log('===')
    })

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    }
  }
})
</script>

<style scoped>

</style>
