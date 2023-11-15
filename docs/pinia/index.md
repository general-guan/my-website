# Pinia

[官方地址](https://pinia.vuejs.org/zh/)

## 安装

```bash
yarn add pinia
# 或者使用 npm
npm install pinia
```

创建一个 pinia 实例 (根 store) 并将其传递给应用：

```js
import { createApp } from 'vue';
// highlight-next-line
import { createPinia } from 'pinia';
import App from './App.vue';

// highlight-start
const pinia = createPinia();
const app = createApp(App);
// highlight-end

// highlight-next-line
app.use(pinia);
app.mount('#app');
```

## Store

1. 新建一个文件夹 Store

2. 新建文件 Store --> [name].ts

3. 

   

