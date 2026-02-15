# 注意事项

> 使用颜色模式时的重要考虑

当 `$colorMode.preference` 设置为 `'system'` 时，在你的 Vue 模板中使用 `$colorMode` 会导致闪烁。这是因为在预渲染页面时无法知道用户偏好，因为这些偏好是在客户端检测的。

## 避免闪烁

为了避免闪烁，你必须使用 `$colorMode.unknown` 来保护任何依赖 `$colorMode` 的渲染路径，以渲染占位符，或者使用 `<ColorScheme>` 组件。

### 示例

```vue
<template>
  <ColorScheme placeholder="..." tag="span">
    Color mode: <b>{{ $colorMode.preference }}</b>
    <span v-if="$colorMode.preference === 'system'">
      (<i>{{ $colorMode.value }}</i> 模式被检测)
    </span>
  </ColorScheme>
</template>
```
