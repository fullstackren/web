# Vue2

## 语法内容

## 编程风格

### API 风格

Vue2 的 API 风格包含**选项式 API（Option API）**和**组合式 API（Composition API）**。

**选项式 API** 是包含多个选项的对象来描述组件的逻辑，例如 `data`、`methods` 和 `mounted`。其中，选项所定义的属性都会暴露在函数内部的 `this` 上，它会**指向当前的组件实例**。比如：

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

**组合式 API** 是与 `<script setup>` 搭配使用，`setup` 是一个标识，告诉 Vue 需要在编译时进行一些处理。

```vue
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

实际上，**选项式 API 是在组合式 API 的基础上实现的**！

## 参考资料

- [Vue2 官网](https://v2.cn.vuejs.org/)