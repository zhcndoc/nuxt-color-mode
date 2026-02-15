# 强制颜色模式

> 学习如何在页面上强制使用特定颜色模式

你可以通过使用 `definePageMeta` 设置 `colorMode` 属性，在页面级别强制指定颜色模式：

```html [pages/light.vue]
<template>
  <h1>此页面被强制为浅色模式</h1>
</template>

<script setup>
definePageMeta({
  colorMode: 'light',
})
</script>
```

此功能非常适合通过将尚未准备好的页面设置为 `colorMode: 'light'` 来逐步为网站实现暗色模式。

<callout>

我们建议隐藏或禁用页面上的颜色模式选择器，因为它无法更改当前页面的颜色模式，可以通过使用 `$colorMode.forced` 值来判断。

</callout>
