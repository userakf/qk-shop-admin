import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import elementPlus from './plugins/element-plus'
import elementIcon from './plugins/element-icon'
// 加载全局样式
import './styles/index.scss'

createApp(App)
    .use(router)
    .use(elementPlus)
    .use(elementIcon)
    .use(createPinia())
    .mount('#app')
