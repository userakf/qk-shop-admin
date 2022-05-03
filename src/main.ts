import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import elementPlus from './plugins/element-plus'
// 加载全局样式
import './styles/index.scss'

createApp(App)
    .use(router)
    .use(elementPlus)
    .use(createPinia())
    .mount('#app')
