import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import { createPinia } from 'pinia'
import 'jquery'

const pinia = createPinia()

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(pinia)
  .use(router)
  .mount('#app')
