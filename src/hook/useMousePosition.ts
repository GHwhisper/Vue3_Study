import { onBeforeUnmount, onMounted, ref } from 'vue'

export default function() {
  const x = ref(-1)
  const y = ref(-1)

  // 点击事件回调
  const clickHandler = (event: MouseEvent) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 页面加载完毕，再进行点击事件
  onMounted(() => {
    window.addEventListener('click', clickHandler)
  })

  // 组件卸载前
  onBeforeUnmount(() => {
    window.removeEventListener('click', clickHandler)
  })

  return {
    x,
    y
  }
}
