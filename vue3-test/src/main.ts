import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)

app.use(ElementPlus)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })  //设置表单组件的默认尺寸，设置弹出组件的层级
app.use(store).use(router).mount('#app')
