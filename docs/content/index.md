---
title: Nuxt Color Mode 中文文档
description: 轻松实现深色和浅色模式以及自动检测，适用于 Nuxt 🌗
---

## 特性

- Nuxt 3 和 Nuxt Bridge 支持
- 为 `<html>` 添加 `.${color}-mode` 类，以便轻松进行 CSS 主题设计
- 强制页面使用特定颜色模式（非常适合渐进式开发）
- 适用于客户端和通用渲染
- 与 [@nuxtjs/tailwindcss](https://github.com/nuxt-modules/tailwindcss) 开箱即用
- 自动检测系统 [color-mode](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-mode)
- 支持 IE9+ 👴

## 实时演示

[![Nuxt 颜色模式演示](/demo.gif){.border-b .border-r}](https://color-mode.nuxtjs.app)

查看[在线演示](https://color-mode.nuxtjs.app)和[源代码](https://github.com/nuxt-modules/color-mode/tree/main/playground)。

## 设置

::callout
当前版本的 `@nuxtjs/color-mode` 与 [Nuxt 3 和 Nuxt Bridge](https://nuxt.com) 兼容。 :br 如果你在寻找这个模块的旧版本，请查看 [v2.color-mode.nuxtjs.org](https://v2.color-mode.nuxtjs.org/)，或 [阅读更多关于差异的信息](#迁移到v3)。
::

将 `@nuxtjs/color-mode` 依赖项添加到你的项目中：

```bash
npx nuxi module add color-mode
```

然后，在 `nuxt.config.ts` 的 `modules` 部分中添加 `@nuxtjs/color-mode`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode'
  ]
})
```

你准备好开始用 `.dark-mode` 和 `.light-mode` 类来设计你的 CSS 了 ✨

## 使用

你可以通过调用 `useColorMode()` 或直接在模板中访问 `$colorMode` 来访问颜色模式助手。这个助手具有以下属性：

- `preference`: 实际选择的颜色模式（可以是 `'system'`），更新它以更改用户偏好的颜色模式
- `value`: 有用，以知道当 `$colorMode === 'system'` 时检测到的当前颜色模式，你不应该更新它
- `unknown`: 有用，以知道在 SSR 或生成期间，我们需要渲染一个占位符
- `forced`: 有用，以知道当前颜色模式是否被当前页面强制（用于隐藏颜色选择器）

```html [pages/index.vue]
<template>
  <div>
    <h1>颜色模式: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">系统</option>
      <option value="light">浅色</option>
      <option value="dark">深色</option>
      <option value="sepia">琥珀色</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
```

## 强制一个颜色模式

你可以在页面级别（仅父级）强制颜色模式，通过设置 `colorMode` 属性：

```html [pages/light.vue]
<template>
  <h1>这个页面被强制使用了浅色模式</h1>
</template>

<script>
// 对于 Nuxt Bridge
export default {
  colorMode: 'light',
}
// 对于 Nuxt 3
definePageMeta({
  colorMode: 'light',
})
</script>
```

这个特性非常适合逐步实施深色模式，通过将尚未准备好的页面设置为 `colorMode: 'light'`。

::提示
我们建议隐藏或禁用页面上的颜色模式选择器，因为当前页面的颜色模式无法更改，使用 `$colorMode.forced` 值。
::

## 配置

你可以在你的 `nuxt.config.js` 中通过提供 `colorMode` 属性来配置模块；这里是默认选项：

```js{}[nuxt.config.js]
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // $colorMode.preference 的默认值
    fallback: 'light', // 如果找不到系统偏好设置，则回退值
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // 或 'sessionStorage' 或 'cookie'
    storageKey: 'nuxt-color-mode'
  }
})
```

注意：
- `'system'` 是一个特殊值；它将自动根据系统偏好（查看 [prefers-color-mode 规范](https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-mode)）检测颜色模式。注入的值将是 `'light'` 或 `'dark'`。如果检测到 `no-preference` 或浏览器不处理 color-mode，它将设置 `fallback` 值。
- 可选的 `dataValue` 允许你向 `html` 添加 `dataset`，例如，如果你当前在 `html` 上有一个 `class="dark"`，`dataValue: 'theme'` 还会在 `html` 上设置 `data-theme="dark"`。当你使用像 daisyUI 这样的库，它使用 `data-theme="light"` 在 `html` 上应用主题时，这很有用。

## 注意事项

当 `$colorMode.preference` 设置为 `'system'` 时，在你的 Vue 模板中使用 `$colorMode` 会导致闪烁。这是因为当我们预渲染页面时，我们无法知道用户偏好，因为它们是在客户端检测到的。

为了避免闪烁，你必须使用 `$colorMode.unknown` 来保护任何依赖于 `$colorMode` 的渲染路径，以渲染一个占位符，或使用我们的 `<ColorScheme>` 组件。

**示例：**

```vue
<template>
  <ColorScheme placeholder="..." tag="span">
    颜色模式: <b>{{ $colorMode.preference }}</b>
    <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> 模式检测)</span>
  </ColorScheme>
</template>
```

属性：
- `placeholder`: `String`
- `tag`: `String`,  默认: `'span'`

插槽：
- `placeholder`: 用于渲染占位符，类似于 `placeholder` 属性

## 迁移到 v3

`@nuxtjs/color-mode` v3 要求使用 Nuxt Bridge 或 Nuxt 3。（如果你在使用 Nuxt 2 不带 Bridge，你应该继续使用 v2。）

1. Nuxt 2 -> Nuxt 3 之间的主要变化是在页面层面上，你会使用 `definePageMeta` 定义你的颜色模式：

```diff
<template>
  <h1>这个页面被强制使用了浅色模式</h1>
</template>

- <script>
- export default {
-   colorMode: 'light',
- }
+ <script setup>
+ definePageMeta({
+   colorMode: 'light',
+ })
</script>
```

⚠️ 如果你在使用 Nuxt Bridge，你不应该使用 `definePageMeta`，而应该继续使用组件选项 `colorMode`。

2. `$colorMode` 助手保持不变，但还有一个新的组合包 (`useColorMode`)，这是访问颜色模式信息的推荐方式。

3. 如果你直接导入颜色模式配置类型，请注意，这已经被重命名为 `ModuleOptions`。

## 贡献

1. 克隆这个仓库
2. 使用 `pnpm install` 安装依赖
3. 使用 `pnpm dev` 启动开发服务器

## 许可证

[MIT 许可证](https://github.com/nuxt-modules/color-mode/blob/main/LICENSE)

