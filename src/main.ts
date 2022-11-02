import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';


import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';

// uno css
import '@unocss/reset/tailwind.css'
import 'uno.css'
// uno css

import './assets/main.css'

const app = createApp(App)

app.use(Antd)
app.use(createPinia())
app.use(router)

app.mount('#app')
