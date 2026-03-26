# 配置

> 配置颜色模式模块

你可以通过在 `nuxt.config.ts` 中提供 `colorMode` 属性来配置该模块。以下是默认选项：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // $colorMode.preference 的默认值
    fallback: 'light', // 未检测到系统偏好时的回退值
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // 或 'sessionStorage' 或 'cookie'
    storageKey: 'nuxt-color-mode',
    cookieAttrs: { 'max-age': '31536000', path: '/' }
  }
})
```

## 选项

### `preference`

- 类型：`string`
- 默认值：`'system'`

默认的颜色模式偏好。`'system'` 是一个特殊值，会根据系统偏好自动检测颜色模式。

### `fallback`

- 类型：`string`
- 默认值：`'light'`

如果未检测到系统偏好，则使用的回退颜色模式值。

### `dataValue`

- 类型：`string`
- 默认值：`undefined`

可选的数据集属性，添加到 `<html>` 元素上。例如，如果设置 `dataValue: 'theme'`，则会在 `<html>` 上添加 `data-theme="dark"`。这对于使用 daisyUI 等库时非常有用。

### `storage`

- 类型：`'localStorage' | 'sessionStorage' | 'cookie'`
- 默认值：`'localStorage'`

用于持久化颜色模式偏好的存储类型。

### `storageKey`

- 类型：`string`
- 默认值：`'nuxt-color-mode'`

存储的键名。

### `cookieAttrs`

- 类型：`object`
- 默认值：`{ 'max-age': '31536000', path: '/' }`

当 `storage` 设置为 `'cookie'` 时，设置 cookie 的属性。默认情况下，cookie 设置为一年有效期并且作用域为根路径。

你可以覆盖这些属性以自定义 cookie 行为，例如设置 `SameSite` 或 `Secure`：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    storage: 'cookie',
    cookieAttrs: {
      'max-age': '31536000',
      'path': '/',
      'SameSite': 'Lax',
      'Secure': '',
    }
  }
})
```
