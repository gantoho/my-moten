import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Icon', Icon)

app.mount('#app')

