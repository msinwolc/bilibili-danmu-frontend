import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 引入中文语言包

import router from "./router";

createApp(App).use(ElementPlus, {locale: zhCn}).use(router).mount('#app')
