# Nuxt Color Mode

> 使用 Nuxt 轻松实现自动检测的暗黑和亮色模式 🌗

<u-page-hero orientation="horizontal">
<template v-slot:title="">
<span className="text-primary">

自动检测

</span>

 <br />

 深色和浅色模式

</template>

<template v-slot:description="">

适用于 Nuxt 的即插即用 Color Mode 模块，轻松实现自动检测。通过 `.dark` 和 `.light` 类名轻松为您的应用设置主题。

</template>

<template v-slot:links="">
<u-button icon="i-ph-rocket-launch-duotone" size="xl" to="/getting-started">

快速开始

</u-button>

<copy-code-input source="npx nuxt module add color-mode">



</copy-code-input>
</template>
</u-page-hero>

<u-page-section>
<template v-slot:title="">

充分利用您的应用的 <br />

 <span className="text-primary">

强大功能

</span>
</template>

<template v-slot:features="">
<u-page-card icon="i-ph-moon-duotone" to="/usage/basic">
<template v-slot:title="">

自动检测

</template>

<template v-slot:description="">

自动检测用户的系统颜色模式偏好，并应用于您的应用。

</template>
</u-page-card>

<u-page-card icon="i-ph-palette-duotone" to="/usage/basic">
<template v-slot:title="">

简易 CSS 主题化

</template>

<template v-slot:description="">

向您的 CSS 添加 `.dark` 和 `.light` 类，实现轻松主题化。

</template>
</u-page-card>

<u-page-card icon="i-ph-lock-duotone" to="/usage/force-mode">
<template v-slot:title="">

页面强制模式

</template>

<template v-slot:description="">

将特定页面锁定为某一颜色模式，适合渐进式暗黑模式实现。

</template>
</u-page-card>

<u-page-card icon="i-ph-gear-duotone" to="/usage/configuration">
<template v-slot:title="">

高度可配置

</template>

<template v-slot:description="">

可自定义存储方案、回退机制、类名等，满足您的需求。

</template>
</u-page-card>

<u-page-card icon="i-ph-brackets-angle-duotone" to="/usage/basic">
<template v-slot:title="">

SSR 准备就绪

</template>

<template v-slot:description="">

无缝兼容客户端和服务器端渲染。

</template>
</u-page-card>

<u-page-card icon="i-ph-puzzle-piece-duotone" to="/getting-started/installation">
<template v-slot:title="">

框架支持

</template>

<template v-slot:description="">

开箱即用，支持 Tailwind CSS 及其他流行 CSS 框架。

</template>
</u-page-card>
</template>
</u-page-section>

<u-page-section align="center">
<template v-slot:title="">

数千名开发者的信赖之选

</template>

<template v-slot:description="">

Nuxt Color Mode 被全球各公司和开发者使用，提供无缝的暗黑模式体验。

</template>

<template v-slot:links="">
<u-button icon="i-ph-rocket-launch-duotone" size="xl" to="/getting-started">

快速开始

</u-button>
</template>
</u-page-section>
