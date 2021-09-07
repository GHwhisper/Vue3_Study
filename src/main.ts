// createApp函数 用来创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
// App组件（所有组件的父级组件）
import App from './App.vue'

// 创建App应用，返回对应的实例对象，调用mount方法挂载
createApp(App).mount('#app')
