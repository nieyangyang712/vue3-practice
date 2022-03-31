import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入所有的el-iocn图标
import * as ElIcons from '@element-plus/icons'

import App from './App.vue'
import router from './router'
import store from './store'
import { zhCn } from 'element-plus/lib/locale'
const app = createApp(App)
// 统一注册el-icon图标
for (const name in ElIcons){
	app.component(name, (ElIcons as any)[name])
}


app.use(store)
.use(router)
.use(ElementPlus, { locale: zhCn, size: 'medium', zIndex: 3000 })
.mount('#app')